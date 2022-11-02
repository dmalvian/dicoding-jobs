<?php

namespace Tests\Feature\Jobs;

use App\Models\User;
use App\Models\Job;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Inertia\Testing\AssertableInertia as Assert;

class CreateJobApplicationTest extends TestCase
{
    use RefreshDatabase;

    public function test_should_redirect_to_login_if_user_is_unauthenticated()
    {
        $response = $this->get(route('jobs.applications.create', ['job' => 'x']));

        $response->assertRedirect(route('login'));
    }

    public function test_should_redirect_to_jobs_list_page_if_job_is_not_found()
    {
        $user = User::factory()->create();
        $response = $this->actingAs($user)->get(route('jobs.applications.create', ['job' => 'x']));

        $response->assertRedirect(route('jobs.index'));
        $response->assertSessionHas('message', 'Pekerjaan yang Anda cari tidak ditemukan!');
    }

    public function test_create_application_page_is_accessible()
    {
        $user = User::factory()->create();
        $job = Job::factory()->create();

        $response = $this->actingAs($user)->get(route('jobs.applications.create', ['job' => $job->id]));

        $response->assertOk();
    }

    public function test_create_application_page_contains_required_data()
    {
        $user = User::factory()->create();
        $job = Job::factory()->create();

        $response = $this->actingAs($user)->get(route('jobs.applications.create', ['job' => $job->id]));

        $response->assertInertia(
            fn (Assert $page) => $page
                ->has('auth.user')
                ->has('job'));
    }

    public function test_create_application_page_contains_correct_data()
    {
        $users = User::factory()->count(3)->create();
        $jobs = Job::factory()->count(3)->create();

        $response = $this->actingAs($users[1])->get(route('jobs.applications.create', ['job' => $jobs[1]->id]));

        $user = User::find($users[1]->id);
        $job = Job::find($jobs[1]->id);
        $response->assertInertia(
            fn (Assert $page) => $page
                ->where('auth.user', $user)
                ->where('job', $job));
    }
}
