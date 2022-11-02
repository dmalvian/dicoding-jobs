<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Job;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\JobApplication>
 */
class JobApplicationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'job_id' => Job::all()->random()->id,
            'user_id' => User::all()->random()->id,
            'name' => fake()->name(),
            'email' => fake()->email(),
            'phone' => fake()->phoneNumber(),
            'cover_letter' => fake()->paragraph(6),
            'cv_link' => fake()->url(),
            'skills' => fake()->sentence(4),
            'other' => fake()->url(),
            'status' => 'active',
        ];
    }
}
