<?php

namespace Tests\Feature\Jobs;

use App\Models\User;
use App\Models\Job;
use App\Models\JobApplication;
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

    public function test_should_fail_if_applicant_has_more_than_3_active_applications()
    {
        $user = User::factory()->create();
        $appliedJobs = Job::factory()->count(3)->create();
        $unappliedJob = Job::factory()->create();

        foreach ($appliedJobs as $job) {
            JobApplication::factory()->count(3)->create([
                'user_id' => $user->id,
                'job_id' => $job->id,
                'status' => 'active'
            ]);
        }

        $response = $this->actingAs($user)->post(route('jobs.applications.store', ['job' => $unappliedJob->id]));

        $response->assertRedirect(route('jobs.show', ['job' => $unappliedJob->id]));
        $response->assertSessionHas('message', 'Maaf, Anda hanya dapat memiliki maksimal tiga lamaran aktif.');
    }

    public function test_should_fail_if_any_mandatory_fields_not_filled()
    {
        $user = User::factory()->create();
        $job = Job::factory()->create();

        $response = $this->actingAs($user)->post(route('jobs.applications.store', ['job' => $job->id]), [
            'name' => '',
            'email' => '',
            'phone' => '',
            'cover_letter' => '',
            'cv_link' => '',
            'skills' => '',
            'other' => '',
        ]);

        $response->assertInvalid(['name', 'email', 'phone', 'cover_letter', 'cv_link']);
    }

    public function test_should_fail_if_fields_not_passed_validation()
    {
        $user = User::factory()->create();
        $job = Job::factory()->create();
        $application = JobApplication::factory()->make([
            'email' => 'abc',
            'cv_link' => 'abc',
        ]);

        $response = $this->actingAs($user)
            ->post(route('jobs.applications.store', ['job' => $job->id]), $application->toArray());

        $response->assertInvalid(['email', 'cv_link']);
    }

    public function test_should_fail_if_apply_same_job_twice()
    {
        $user = User::factory()->create();
        $job = Job::factory()->create();
        $application = JobApplication::factory()->make([
            'user_id' => $user->id,
            'job_id' => $job->id,
        ]);
        $payload = $application->toArray();
        $application->save();

        $response = $this->actingAs($user)
            ->post(route('jobs.applications.store', ['job' => $job->id]), $payload);

        $response->assertRedirect(route('jobs.show', ['job' => $job->id]));
        $response->assertSessionHas('message', 'Maaf, Anda sudah pernah melamar pekerjaan ini.');
    }

    public function test_can_apply_a_job_if_meet_all_requirements()
    {
        $user = User::factory()->create();
        $job = Job::factory()->create();
        $application = JobApplication::factory()->make([
            'user_id' => $user->id,
            'job_id' => $job->id,
        ])->toArray();

        $response = $this->actingAs($user)
            ->post(route('jobs.applications.store', ['job' => $job->id]), $application);

        $response->assertRedirect(route('jobs.show', ['job' => $job->id]));
        $response->assertSessionHas('message', 'Lamaran Anda telah berhasil dikirimkan.');
        $this->assertDatabaseCount('job_applications', 1);
        $this->assertDatabaseHas('job_applications', $application);
    }
}
