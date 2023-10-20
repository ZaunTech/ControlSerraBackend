/*
  Warnings:

  - A unique constraint covering the columns `[idOrcamento]` on the table `Pedidos` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `idPedido` to the `Orcamentos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `usuarios` DROP FOREIGN KEY `Usuarios_idOrcamento_fkey`;

-- AlterTable
ALTER TABLE `orcamentos` ADD COLUMN `idPedido` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `produtos` ADD COLUMN `orcamentoId` INTEGER NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Pedidos_idOrcamento_key` ON `Pedidos`(`idOrcamento`);

-- AddForeignKey
ALTER TABLE `Produtos` ADD CONSTRAINT `Produtos_orcamentoId_fkey` FOREIGN KEY (`orcamentoId`) REFERENCES `Orcamentos`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
