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

        $response->assertInertia(
            fn (Assert $page) => $page
                ->has('jobs'));
    }

    public function test_job_list_page_has_correct_max_number_of_data_in_a_page()
    {
        Job::factory()->count(10)->create();
        $maxItemsPerPage = 8;

        $response = $this->get(route('jobs.index'));

        $response->assertInertia(
            fn (Assert $page) => $page
                ->has('jobs.data', $maxItemsPerPage));
    }

    public function test_job_list_page_has_correct_data_when_paginated()
    {
        Job::factory()->count(10)->create();

        $response = $this->get(route('jobs.index', ['page' => '2']));

        $jobs = Job::latest()->paginate(8);
        $response->assertInertia(
            fn (Assert $page) => $page
                ->where('jobs.data', $jobs->toArray()['data']));
    }
}
