<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StatusRideSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('status_rides')->insert([
            'name' => 'pending',
        ]);

        DB::table('status_rides')->insert([
            'name' => 'canceled',
        ]);

        DB::table('status_rides')->insert([
            'name' => 'accepted',
        ]);

        DB::table('status_rides')->insert([
            'name' => 'rejected',
        ]);

        DB::table('status_rides')->insert([
            'name' => 'completed',
        ]);
    }
}
