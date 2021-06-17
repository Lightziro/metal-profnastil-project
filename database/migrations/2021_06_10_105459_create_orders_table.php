<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use \App\Orders;
use \App\Product;
use \App\DataOrder;

class CreateOrdersTable extends Migration
{
    public function up()
    {
        Schema::create((new Orders())->getTable(), function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('productId')->comment('Продукт');
            $table->foreign('productId')->references('id')->on((new Product())->getTable());
            $table->unsignedBigInteger('dataClientId')->comment('Клиент');
            $table->foreign('dataClientId')->references('id')->on((new DataOrder())->getTable());
            $table->float('count')->comment('Количество товара');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists((new Orders())->getTable());
    }
}
