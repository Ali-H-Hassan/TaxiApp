<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        //

        Schema::create("status_rides", function (Blueprint $table) {
            $table->id();
            $table->string("name", 20);
        });

        Schema::create("rides", function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('passenger_id');
            $table->unsignedBigInteger('driver_id')->nullable();
            $table->unsignedBigInteger('status_id');
            $table->string('start_location');
            $table->string('end_location');
            $table->dateTime("start_time");
            $table->dateTime("end_time")->nullable();
            $table->integer('rating')->nullable();
            $table->timestamps();

            $table->foreign('passenger_id')->references('id')->on('users');
            $table->foreign('driver_id')->references('id')->on('users');
            $table->foreign('status_id')->references('id')->on('status_rides');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
