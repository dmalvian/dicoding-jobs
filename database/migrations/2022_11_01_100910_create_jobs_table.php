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
        Schema::create('jobs', function (Blueprint $table) {
            $table->id();
            $table->string('company_name');
            $table->string('company_location');
            $table->string('company_logo');
            $table->string('title');
            $table->string('role');
            $table->enum('contract_type', ['fulltime', 'freelance', 'intern', 'remote']);
            $table->enum('experience', ['freshgraduate', '1-3', '3-5', '5-10', '>10']);
            $table->text('requirement');
            $table->text('job_description');
            $table->text('about_company');
            $table->text('responsibilities');
            $table->string('skills');
            $table->string('business_sector');
            $table->date('expiredAt');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('jobs');
    }
};
