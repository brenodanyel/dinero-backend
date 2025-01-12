/*
  Warnings:

  - You are about to alter the column `vl_transacao` on the `transacoes` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "transacoes" ALTER COLUMN "vl_transacao" SET DATA TYPE INTEGER;
