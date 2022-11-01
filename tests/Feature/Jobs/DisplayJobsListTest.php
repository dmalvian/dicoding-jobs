<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class DisplayJobsListTest extends TestCase
{

    public function test_jobs_list_page_is_accessible()
    {
        $response = $this->get(route('jobs.index'));

        $response->assertOk();
    }
}
