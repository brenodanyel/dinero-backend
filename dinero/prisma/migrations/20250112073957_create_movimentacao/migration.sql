-- CreateTable
CREATE TABLE "Movimentacao" (
    "id" TEXT NOT NULL,
    "no_movimentacao" TEXT NOT NULL,
    "vl_movimentacao" DECIMAL(65,30) NOT NULL,
    "dt_movimentacao" TIMESTAMP(3) NOT NULL,
    "dt_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Movimentacao_pkey" PRIMARY KEY ("id")
);
