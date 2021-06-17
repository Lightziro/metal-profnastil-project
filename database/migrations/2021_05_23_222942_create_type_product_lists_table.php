<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use \App\TypeProductList;

class CreateTypeProductListsTable extends Migration
{
    public function up()
    {
        Schema::create((new TypeProductList())->getTable(), function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name', 250)->comment('Название продукта');
            $table->string('code', 50)->comment('Код продукта');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists((new TypeProductList())->getTable());
    }
}
