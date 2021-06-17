<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateQuestionsTable extends Migration
{
    private $nameTable = 'questions';
    public function up()
    {
        Schema::create($this->nameTable, function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 100)->comment('Имя клиента');
            $table->string('phone', 30)->comment('Телефон клиента');
            $table->string('email', 200)->comment('Почти клиента');
            $table->string('comment', 500)->comment('Комментарий клиента');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists($this->nameTable);
    }
}
