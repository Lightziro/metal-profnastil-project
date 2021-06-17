<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use \App\DataOrder;

class CreateDataOrdersTable extends Migration
{
    public function up()
    {
        Schema::create((new DataOrder())->getTable(), function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('fullName')->comment('ФИО клиента');
            $table->string('companyName')->comment('Наименование компании')->nullable();
            $table->string('phone', 30)->comment('Телефон');
            $table->string('email', 75)->nullable()->comment('Почта');
            $table->string('description', 500)->comment('Описание');
            $table->float('fullPrice')->comment('Полная стоимость заказа');
            $table->boolean('isCompany')->comment('Это компания?');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists((new DataOrder())->getTable());
    }
}
