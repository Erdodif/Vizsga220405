<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\idopont>
 */
class IdopontFactory extends Factory
{
    private static function fakeType():string{

        $tipusha = random_int(0,2);
        switch ($tipusha){
            case 0:
                return "erettsegi";
            default:
                return "szakmai";
        }
    }

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            "targy"=>$this->faker->text(),
            "tipus"=>$this->fakeType(),
            "kezdes"=>$this->faker->dateTimeThisMonth()
        ];
    }
}
