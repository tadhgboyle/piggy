<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Goal>
 */
class GoalFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'target_amount' => $this->faker->numberBetween(10000, 100000),
            'target_date' => $this->faker->dateTimeBetween('+1 month', '+1 year'),
        ];
    }
}