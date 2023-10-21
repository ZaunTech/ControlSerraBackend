-- DropForeignKey
ALTER TABLE `orcamentos` DROP FOREIGN KEY `Orcamentos_idCliente_fkey`;

-- AlterTable
ALTER TABLE `orcamentos` MODIFY `idCliente` INTEGER NULL,
    MODIFY `idPedido` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Orcamentos` ADD CONSTRAINT `Orcamentos_idCliente_fkey` FOREIGN KEY (`idCliente`) REFERENCES `Clientes`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
