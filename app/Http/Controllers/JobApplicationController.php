<?php

namespace App\Http\Controllers;

use App\Models\Job;
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

    public function store(Job $job)
    {
        
    }
}
