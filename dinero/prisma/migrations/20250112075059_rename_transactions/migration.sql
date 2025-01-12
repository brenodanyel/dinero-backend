/*
  Warnings:

  - You are about to drop the `Movimentacao` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Movimentacao";

-- CreateTable
CREATE TABLE "transacoes" (
    "id" TEXT NOT NULL,
    "no_transacao" TEXT NOT NULL,
    "vl_transacao" DECIMAL(65,30) NOT NULL,
    "dt_transacao" TIMESTAMP(3) NOT NULL,
    "dt_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "transacoes_pkey" PRIMARY KEY ("id")
);
