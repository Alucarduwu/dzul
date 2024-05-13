<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use \App\Models\Program;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            "first_name" => fake()->firstName(),
            "last_name" => fake()->lastName(),
            "control" => fake()->bothify('?########'),
            "email" => fake()->safeEmail(),
            "semester" => fake()->numberBetween($min=1, $max=100),
            "program_id" => Program::all()->random()->id,
        ];
    }
}
