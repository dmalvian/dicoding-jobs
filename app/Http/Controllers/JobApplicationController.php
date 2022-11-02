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

        if (
            JobApplication::where('user_id', $user->id)
                ->where('job_id', $job->id)
                ->exists()
        ) {
            return redirect()
                ->route('jobs.show', ['job' => $job->id])
                ->with('message', 'Maaf, Anda sudah pernah melamar pekerjaan ini.');
        }

        $validated = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'cover_letter' => 'required',
            'cv_link' => 'required|url',
        ]);

        JobApplication::create([
            'user_id' => $user->id,
            'job_id' => $job->id,
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'cover_letter' => $request->cover_letter,
            'cv_link' => $request->cv_link,
            'skills' => $request->skills,
            'other' => $request->other,
        ]);

        return redirect()
                ->route('jobs.show', ['job' => $job->id])
                ->with('message', 'Lamaran Anda telah berhasil dikirimkan.');
    }
}
