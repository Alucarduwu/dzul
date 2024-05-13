<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        //
        Schema::table('students', function (Blueprint $table){
            $table->unsignedBigInteger('program_id');
            $table->foreign('program_id')
                 ->references('id')->on('programs')
                 ->onDelete('cascade'); //se puede omitir ya que borra todo y solo se aplica cuando sea necesario 

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
        Schema::table('students', function (Blueprint $table){
            $table->dropForeign('students_program_id_foreign');
            $table->dropColumn('program_id');
        });
    }
    
};

