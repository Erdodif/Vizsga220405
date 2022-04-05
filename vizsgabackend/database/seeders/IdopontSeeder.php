<?php

namespace Database\Seeders;

use App\Models\Idopont;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class IdopontSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        return Idopont::factory(5)->create();
    }
}
