<?php

namespace Tests\Feature\Jobs;

use App\Models\Job;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Inertia\Testing\AssertableInertia as Assert;

class DisplayJobDetail extends TestCase
{
    use RefreshDatabase;

    public function test_job_detail_page_is_accessible()
    {
        $job = Job::factory()->create();

        $response = $this->get(route('jobs.show', ['job' => $job->id]));

        $response->assertOk();
    }

    public function test_job_detail_page_should_redirect_to_jobs_list_page_if_job_is_not_found()
    {
        $response = $this->get(route('jobs.show', ['job' => 'x']));

        $response->assertRedirect(route('jobs.index'));
        $response->assertSessionHas('message', 'Pekerjaan yang Anda cari tidak ditemukan!');
    }

    public function test_job_detail_page_contains_required_data()
    {
        $job = Job::factory()->create();

        $response = $this->get(route('jobs.show', ['job' => $job->id]));

        $response->assertInertia(
            fn (Assert $page) => $page
                ->has('job'));
    }

    public function test_job_detail_page_contains_correct_job_data()
    {
        $jobs = Job::factory()->count(3)->create();

        $response = $this->get(route('jobs.show', ['job' => $jobs[1]->id]));


        $job = Job::find($jobs[1]->id);
        $response->assertInertia(
            fn (Assert $page) => $page
                ->where('job', $job));
    }
}
