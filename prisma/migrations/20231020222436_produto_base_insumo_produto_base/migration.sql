/*
  Warnings:

  - You are about to drop the column `Nome` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `Nome` on the `fornecedores` table. All the data in the column will be lost.
  - You are about to drop the column `idOrcamento` on the `usuarios` table. All the data in the column will be lost.
  - You are about to drop the `listainsumos` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[idOrcamento]` on the table `Pedidos` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `idFornecedor` to the `Cotacaos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idInsumo` to the `Cotacaos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idPedido` to the `Orcamentos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `listainsumos` DROP FOREIGN KEY `ListaInsumos_idCotacao_fkey`;

-- DropForeignKey
ALTER TABLE `listainsumos` DROP FOREIGN KEY `ListaInsumos_idInsumo_fkey`;

-- DropForeignKey
ALTER TABLE `listainsumos` DROP FOREIGN KEY `ListaInsumos_idProduto_fkey`;

-- DropForeignKey
ALTER TABLE `usuarios` DROP FOREIGN KEY `Usuarios_idOrcamento_fkey`;

-- AlterTable
ALTER TABLE `clientes` DROP COLUMN `Nome`,
    ADD COLUMN `nome` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `cotacaos` ADD COLUMN `idFornecedor` INTEGER NOT NULL,
    ADD COLUMN `idInsumo` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `fornecedores` DROP COLUMN `Nome`,
    ADD COLUMN `nome` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `orcamentos` ADD COLUMN `idPedido` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `pedidos` MODIFY `status` ENUM('Pendente', 'Iniciado', 'Em Processo', 'Concluido') NULL DEFAULT 'Pendente';

-- AlterTable
ALTER TABLE `produtos` ADD COLUMN `orcamentoId` INTEGER NULL;

-- AlterTable
ALTER TABLE `usuarios` DROP COLUMN `idOrcamento`;

-- DropTable
DROP TABLE `listainsumos`;

-- CreateTable
CREATE TABLE `Lista Insumos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `quantidade` INTEGER NULL,
    `idProduto` INTEGER NULL,
    `idInsumo` INTEGER NULL,
    `idCotacao` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Produtos Base` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `quantidade` INTEGER NULL,
    `valorUnitario` DOUBLE NULL,
    `observacoes` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Insumos Produtos Base` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `quantidade` DOUBLE NULL,
    `idProdutoBase` INTEGER NULL,
    `idInsumo` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Pedidos_idOrcamento_key` ON `Pedidos`(`idOrcamento`);

-- AddForeignKey
ALTER TABLE `Produtos` ADD CONSTRAINT `Produtos_orcamentoId_fkey` FOREIGN KEY (`orcamentoId`) REFERENCES `Orcamentos`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cotacaos` ADD CONSTRAINT `Cotacaos_idInsumo_fkey` FOREIGN KEY (`idInsumo`) REFERENCES `Insumos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cotacaos` ADD CONSTRAINT `Cotacaos_idFornecedor_fkey` FOREIGN KEY (`idFornecedor`) REFERENCES `Fornecedores`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Lista Insumos` ADD CONSTRAINT `Lista Insumos_idProduto_fkey` FOREIGN KEY (`idProduto`) REFERENCES `Produtos`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Lista Insumos` ADD CONSTRAINT `Lista Insumos_idInsumo_fkey` FOREIGN KEY (`idInsumo`) REFERENCES `Insumos`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Lista Insumos` ADD CONSTRAINT `Lista Insumos_idCotacao_fkey` FOREIGN KEY (`idCotacao`) REFERENCES `Cotacaos`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Insumos Produtos Base` ADD CONSTRAINT `Insumos Produtos Base_idProdutoBase_fkey` FOREIGN KEY (`idProdutoBase`) REFERENCES `Produtos Base`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Insumos Produtos Base` ADD CONSTRAINT `Insumos Produtos Base_idInsumo_fkey` FOREIGN KEY (`idInsumo`) REFERENCES `Insumos`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
