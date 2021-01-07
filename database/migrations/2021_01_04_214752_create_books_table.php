<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->integer('category_id')->default(1);
            $table->string('title');
            $table->text('description');
            $table->string('writer');
            $table->integer('quantity')->default(1);
            $table->integer('price');
            $table->tinyInteger('ststus')->default(0);
            $table->integer('offer_price')->nullable();
            $table->integer('admin_id')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('books');
    }
}
