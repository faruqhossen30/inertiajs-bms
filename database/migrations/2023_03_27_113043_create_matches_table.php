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
        Schema::create('matches', function (Blueprint $table) {
            $table->id();
            $table->string('team_one');
            $table->string('team_two');
            $table->string('team_one_flag')->nullable();
            $table->string('team_two_flag')->nullable();
            $table->string('statement');
            $table->unsignedBigInteger('game_id');
            $table->timestamp('date_time');
            $table->string('note')->nullable();
            $table->boolean('is_hide')->default(false);
            $table->boolean('area_hide')->default(false);
            $table->boolean('active')->default(false);
            $table->boolean('job')->default(false)->nullable();
            $table->enum('status',['live','upcoming','close'])->default('upcoming');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('matches');
    }
};
