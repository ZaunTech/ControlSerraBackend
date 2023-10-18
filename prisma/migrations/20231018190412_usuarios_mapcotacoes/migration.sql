/*
  Warnings:

  - You are about to drop the `cotacao` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `listainsumos` DROP FOREIGN KEY `ListaInsumos_idCotacao_fkey`;

-- DropTable
DROP TABLE `cotacao`;

-- CreateTable
CREATE TABLE `Cotacaos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `data` DATETIME(3) NOT NULL,
    `valor` DOUBLE NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipoUsuario` ENUM('Serralheiro', 'Administrador', 'Vendedor') NOT NULL,
    `Nome` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `idOrcamento` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Usuarios_cpf_key`(`cpf`),
    UNIQUE INDEX `Usuarios_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ListaInsumos` ADD CONSTRAINT `ListaInsumos_idCotacao_fkey` FOREIGN KEY (`idCotacao`) REFERENCES `Cotacaos`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Usuarios` ADD CONSTRAINT `Usuarios_idOrcamento_fkey` FOREIGN KEY (`idOrcamento`) REFERENCES `Orcamentos`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
