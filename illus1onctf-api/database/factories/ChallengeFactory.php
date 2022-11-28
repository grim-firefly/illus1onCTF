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
            'points' => $this->faker->numberBetween(1, 1000),
            'author_id' => $this->faker->numberBetween(1, 1000),
            'solves' => $this->faker->numberBetween(1, 1000),
            'attempts' => $this->faker->numberBetween(1, 1000),

        ];
    }
}
