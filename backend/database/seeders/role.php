<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class role extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('roles')->insert([
            'name' => 'passenger',
        ]);

        DB::table('roles')->insert([
            'name' => 'driver',
        ]);

        DB::table('roles')->insert([
            'name' => 'admin',
        ]);
    }
}
