-- DropForeignKey
ALTER TABLE `pedidos` DROP FOREIGN KEY `Pedidos_idOrcamento_fkey`;

-- AlterTable
ALTER TABLE `pedidos` MODIFY `idOrcamento` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Pedidos` ADD CONSTRAINT `Pedidos_idOrcamento_fkey` FOREIGN KEY (`idOrcamento`) REFERENCES `Orcamentos`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
