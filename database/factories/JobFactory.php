<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Job>
 */
class JobFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'company_name' => fake()->company(),
            'company_location' => fake()->randomElement(['Jakarta', 'Bandung', 'Jogjakarta']),
            'company_logo' => 'https://placeimg.com/500/500/tech',
            'title' => fake()->sentence(4),
            'role' => fake()->randomElement(['Academy Reviewer', 'Product Engineer', 'Back-End Developer', 'Product Manager']),
            'contract_type' => fake()->randomElement(['fulltime', 'freelance', 'intern', 'remote']),
            'experience' => fake()->randomElement(['freshgraduate', '1-3', '3-5', '5-10', '>10']),
            'requirement' => fake()->paragraph(3),
            'job_description' => fake()->paragraph(3),
            'about_company' => fake()->paragraph(3),
            'responsibilities' => fake()->paragraph(3),
            'skills' => fake()->randomElement(['Front-End Developer', 'Back-End Developer', 'Product Manager', 'Product Designer', 'iOS Developer']),
            'business_sector' => fake()->randomElement(['Education', 'Finance', 'Government', 'Agriculture']),
            'expiredAt' => today()->addDays(7),
        ];
    }
}
