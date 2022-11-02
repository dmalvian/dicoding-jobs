<?php

namespace App\Http\Controllers;

use App\Models\Job;
use App\Models\JobApplication;
use Inertia\Inertia;
use Illuminate\Http\Request;

class JobApplicationController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function create(Job $job)
    {
        return Inertia::render('Jobs/Applications/Create', ['job' => $job]);
    }

    public function store(Job $job, Request $request)
    {
        $user = $request->user();

        if (today()->greaterThan($job->expired_at)) {
            return redirect()
                ->route('jobs.show', ['job' => $job->id])
                ->with('message', 'Masa pembukaan lamaran pekerjaan telah berakhir.');
        }

        if (
            JobApplication::where('user_id', $user->id)
                ->where('status', 'active')
                ->count() >= 3
        ) {
            return redirect()
                ->route('jobs.show', ['job' => $job->id])
                ->with('message', 'Maaf, Anda hanya dapat memiliki maksimal tiga lamaran aktif.');
        }
    }
}
