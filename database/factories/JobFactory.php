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
            'company_size' => fake()->randomElement(['1-50', '50-100', '100-250', '250-1000', '>1000']),
            'title' => fake()->randomElement(['Academy Reviewer', 'Product Engineer', 'Back-End Developer', 'Product Manager']),
            'role' => fake()->randomElement(['Academy Reviewer', 'Product Engineer', 'Back-End Developer', 'Product Manager']),
            'contract_type' => fake()->randomElement(['fulltime', 'freelance', 'intern', 'remote']),
            'experience' => fake()->randomElement(['freshgraduate', '1-3', '3-5', '5-10', '>10']),
            'requirement' => fake()->paragraph(6),
            'job_description' => fake()->paragraph(6),
            'about_company' => fake()->paragraph(6),
            'responsibilities' => fake()->paragraph(6),
            'skills' => fake()->randomElement(['Front-End Developer', 'Back-End Developer', 'Product Manager', 'Product Designer', 'iOS Developer']),
            'business_sector' => fake()->randomElement(['Education', 'Finance', 'Government', 'Agriculture']),
            'expired_at' => today()->addDays(7),
        ];
    }
}
