<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use \App\Product;

class CreateProductsTable extends Migration
{
    public function up()
    {
        Schema::create((new Product())->getTable(), function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name', 500)->comment('Название');
            $table->string('description', 200)->comment('Описание');
            $table->string('imagePath', 500)->comment('Путь к фото');
            $table->float('count')->comment('Количество')->nullable();
            $table->float('price')->comment('Цена');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists((new Product())->getTable());
    }
}
