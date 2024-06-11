<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateQuestionsTable extends Migration
{
    public function up()
    {
        Schema::create('questions', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 255)->comment('Имя клиента');
            $table->string('phone', 30)->nullable()->comment('Телефон клиента');
            $table->string('email', 200)->nullable()->comment('Почти клиента');
            $table->string('comment', 500)->nullable()->comment('Комментарий клиента');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('questions');
    }
}
