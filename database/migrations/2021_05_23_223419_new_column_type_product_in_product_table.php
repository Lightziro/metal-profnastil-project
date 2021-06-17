<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use \App\Product;
use \App\TypeProductList;

class NewColumnTypeProductInProductTable extends Migration
{
    public function up()
    {
        Schema::table((new Product())->getTable(), function (Blueprint $table) {
            $table->unsignedBigInteger('productTypeId')->comment('Тип продукта')->nullable()->after('name');
            $table->foreign('productTypeId')->references('id')->on((new TypeProductList())->getTable());
        });
    }

    public function down()
    {
        Schema::table((new Product())->getTable(), function (Blueprint $table) {
            $table->dropForeign('products_productTypeId_foreign');
            $table->dropIndex('products_productTypeId_foreign');
            $table->dropColumn('productTypeId');
        });
    }
}
