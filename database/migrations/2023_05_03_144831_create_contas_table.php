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
        Schema::create('contas', function (Blueprint $table) {
            $table->id();
            $table->string('fornecedor');
            $table->string('valor');
            $table->string('descricao')->nullable();
            $table->string('status')->nullable();
            $table->string('tipo');
            $table->string('numeroDocumento')->nullable();
            $table->date('dataPagamento')->nullable();
            $table->date('dataVencimento');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contas');
    }
};
