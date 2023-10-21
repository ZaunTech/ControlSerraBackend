/*
  Warnings:

  - You are about to drop the `cotacaos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `listainsumos` DROP FOREIGN KEY `ListaInsumos_idCotacao_fkey`;

-- DropTable
DROP TABLE `cotacaos`;

-- CreateTable
CREATE TABLE `Cotacoes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `data` DATETIME(3) NOT NULL,
    `valor` DOUBLE NULL,
    `idFornecedor` INTEGER NOT NULL,
    `idInsumo` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Cotacoes_idFornecedor_key`(`idFornecedor`),
    UNIQUE INDEX `Cotacoes_idInsumo_key`(`idInsumo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Cotacoes` ADD CONSTRAINT `Cotacoes_idFornecedor_fkey` FOREIGN KEY (`idFornecedor`) REFERENCES `Fornecedores`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cotacoes` ADD CONSTRAINT `Cotacoes_idInsumo_fkey` FOREIGN KEY (`idInsumo`) REFERENCES `Insumos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ListaInsumos` ADD CONSTRAINT `ListaInsumos_idCotacao_fkey` FOREIGN KEY (`idCotacao`) REFERENCES `Cotacoes`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
