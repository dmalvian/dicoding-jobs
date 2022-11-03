<?php

namespace App\Http\Controllers;

use App\Models\Job;
use App\Models\JobApplication;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class JobController extends Controller
{
    public function index()
    {
        return Inertia::render('Jobs/Index', ['jobs' => Job::latest()->paginate(8)]);
    }

    public function show(Job $job)
    {
        $isApplied = false;

        if (Auth::check()) {
            $isApplied = JobApplication::where('user_id', Auth::id())
                ->where('job_id', $job->id)
                ->exists();
        }

        return Inertia::render('Jobs/Detail', ['job' => $job, 'isApplied' => $isApplied]);
    }
}
