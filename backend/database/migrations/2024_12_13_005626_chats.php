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
        Schema::create("chats", function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('first_user');
            $table->unsignedBigInteger('second_user');
            $table->string('message');
            $table->unsignedBigInteger('sender_id');
            $table->timestamps();

            $table->foreign('first_user')->references('id')->on('users');
            $table->foreign('second_user')->references('id')->on('users');
            $table->foreign('sender_id')->references('id')->on('users');
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
