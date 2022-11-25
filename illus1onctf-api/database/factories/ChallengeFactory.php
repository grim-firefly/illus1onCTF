<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Challenge>
 */
class ChallengeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'category' => $this->faker->word,
            'flag' => $this->faker->word,
            'points' => $this->faker->randomNumber,
            'author_id' => $this->faker->randomNumber,
            'solves' => $this->faker->randomNumber,
            'attempts' => $this->faker->randomNumber,
            
        ];
    }
}
