<?php

namespace Tests\Feature;

use App\Models\Job;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class DisplayJobsListTest extends TestCase
{
    use RefreshDatabase;

    public function test_jobs_list_page_is_accessible()
    {
        $response = $this->get(route('jobs.index'));

        $response->assertOk();
    }

    public function test_job_list_page_contains_all_the_required_data()
    {
        Job::factory()->count(3)->create();

        $response = $this->get(route('jobs.index'));

        $jobs = Job::get();
        $response->assertInertia(
            fn (Assert $page) => $page
                ->where('jobs', $jobs));
    }
}
