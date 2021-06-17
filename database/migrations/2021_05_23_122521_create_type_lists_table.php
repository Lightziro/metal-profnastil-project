<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use \App\TypeList;

class CreateTypeListsTable extends Migration
{
    public function up()
    {
        Schema::create((new TypeList())->getTable(), function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name', 100)->comment('Название листа');
            $table->string('code', 100)->comment('Код листа');
            $table->integer('workWidth')->comment('Рабочая ширина');
            $table->integer('generalWidth')->comment('Общая ширина');
        });
    }
    public function down()
    {
        Schema::dropIfExists((new TypeList())->getTable());
    }
}
