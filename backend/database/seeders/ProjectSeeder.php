<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\User;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = User::all();

        Project::factory(50)->make()->each(function($project) use ($users) {
            $project->user_id = $users->random()->id;
            $project->save();
        });
    }
}
