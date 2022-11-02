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
}
