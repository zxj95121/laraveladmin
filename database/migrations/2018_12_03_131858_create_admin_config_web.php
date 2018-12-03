<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAdminConfigWeb extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('admin_config_web', function (Blueprint $table) {
            $table->increments('id');
            $table->string('web_name', 100); /*网站名称*/
            $table->string('web_image', 100); /*网站LOGO*/
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
        Schema::dropIfExists('admin_config_web');
    }
}
