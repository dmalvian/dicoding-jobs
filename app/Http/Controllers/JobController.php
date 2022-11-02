<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Inertia\Inertia;
use Illuminate\Http\Request;

class JobController extends Controller
{
    public function index()
    {
        return Inertia::render('Jobs/Index', ['jobs' => Job::latest()->paginate(8)]);
    }
}
