<?php

namespace Tests\Feature\Jobs;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

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
}
