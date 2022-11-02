<?php

namespace Tests\Feature\Jobs;

use App\Models\User;
use App\Models\Job;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class StoreJobApplicationTest extends TestCase
{
    use RefreshDatabase;

    public function test_should_redirect_to_login_if_user_is_unauthenticated()
    {
        $response = $this->post(route('jobs.applications.store', ['job' => 'x']));

        $response->assertRedirect(route('login'));
    }

    public function test_should_redirect_to_jobs_list_page_if_job_is_not_found()
    {
        $user = User::factory()->create();
        $response = $this->actingAs($user)->post(route('jobs.applications.store', ['job' => 'x']));

        $response->assertRedirect(route('jobs.index'));
        $response->assertSessionHas('message', 'Pekerjaan yang Anda cari tidak ditemukan!');
    }

    public function test_should_fail_when_deadline_is_over()
    {
        $user = User::factory()->create();
        $job = Job::factory()->create(['expired_at' => today()->subDays(3)]);

        $response = $this->actingAs($user)->post(route('jobs.applications.store', ['job' => $job->id]));

        $response->assertRedirect(route('jobs.show', ['job' => $job->id]));
        $response->assertSessionHas('message', 'Masa pembukaan lamaran pekerjaan telah berakhir.');
    }
}
