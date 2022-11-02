<?php

use App\Http\Controllers\JobController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect()->route('jobs.index');
});

Route::resource('/jobs', JobController::class)->only(['index', 'show']);

Route::get('/jobs/{job}/applications/create', function (\App\Models\Job $job) {

})->middleware(['auth'])->name('jobs.applications.create');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
