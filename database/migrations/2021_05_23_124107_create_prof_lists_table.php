<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use \App\ProfList;
use \App\TypeList;
use \App\Product;

class CreateProfListsTable extends Migration
{
    public function up()
    {
        Schema::create((new ProfList())->getTable(), function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('typeListId')->comment('Тип листа')->nullable();
            $table->foreign('typeListId')->references('id')->on((new TypeList())->getTable());
            $table->unsignedBigInteger('productId')->comment('Продукт')->nullable();
            $table->foreign('productId')->references('id')->on((new Product())->getTable());
            $table->float('thickness')->comment('Толщина');
            $table->integer('ralColorIndex')->comment('Номер RAL цвета');
            $table->string('ralColorName', 200)->comment('Название RAL цвета');
            $table->string('ralColorHtml', 500)->comment('Html RAL цвета');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists((new ProfList())->getTable());
    }
}
