<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('job_applications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('job_id')->constrained();
            $table->foreignId('user_id')->constrained();
            $table->string('name');
            $table->string('email');
            $table->string('phone');
            $table->text('cover_letter');
            $table->string('cv_link');
            $table->string('skills')->nullable();
            $table->string('other')->nullable();
            $table->enum('status', ['active', 'completed'])->default('active');
            $table->timestamps();
            $table->index(['job_id', 'user_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('job_applications');
    }
};
