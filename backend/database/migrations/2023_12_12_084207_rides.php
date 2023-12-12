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
        Schema::create("rides", function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('passenger_id');
            $table->unsignedBigInteger('driver_id');
            $table->enum('status', ['requested', 'accepted', 'completed', 'canceled'])->default('requested');
            $table->string('start_location');
            $table->string('end_location');
            $table->integer('rating')->nullable();
            $table->timestamps();

            $table->foreign('passenger_id')->references('id')->on('users');
            $table->foreign('driver_id')->references('id')->on('users');
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
