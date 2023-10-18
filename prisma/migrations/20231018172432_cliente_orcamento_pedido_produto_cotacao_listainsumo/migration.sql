/*
  Warnings:

  - Added the required column `updatedAt` to the `Fornecedores` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `fornecedores` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- CreateTable
CREATE TABLE `Clientes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `contaTipo` ENUM('Fisico', 'Juridico') NOT NULL,
    `rua` VARCHAR(191) NULL,
    `numero` VARCHAR(191) NULL,
    `complemento` VARCHAR(191) NULL,
    `cep` VARCHAR(191) NULL,
    `bairro` VARCHAR(191) NULL,
    `cidade` VARCHAR(191) NULL,
    `estado` VARCHAR(191) NULL,
    `pais` VARCHAR(191) NULL,
    `Nome` VARCHAR(191) NULL,
    `cpf` VARCHAR(191) NULL,
    `rg` VARCHAR(191) NULL,
    `nomeFantasia` VARCHAR(191) NULL,
    `razaoSocial` VARCHAR(191) NULL,
    `cnpj` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Clientes_email_key`(`email`),
    UNIQUE INDEX `Clientes_cpf_key`(`cpf`),
    UNIQUE INDEX `Clientes_rg_key`(`rg`),
    UNIQUE INDEX `Clientes_razaoSocial_key`(`razaoSocial`),
    UNIQUE INDEX `Clientes_cnpj_key`(`cnpj`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Orcamentos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `validade` DATETIME(3) NULL,
    `dataOrcamento` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `totalMaoObra` DOUBLE NULL,
    `totalMateriais` DOUBLE NULL,
    `valorPago` DOUBLE NULL,
    `status` ENUM('Pendente', 'Iniciado', 'Em Processo', 'Concluido') NOT NULL DEFAULT 'Pendente',
    `prazoEstimadoProducao` INTEGER NULL,
    `observacoes` MEDIUMTEXT NULL,
    `idCliente` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pedidos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pagamento` DOUBLE NOT NULL,
    `status` ENUM('Pendente', 'Iniciado', 'Em Processo', 'Concluido') NULL,
    `idOrcamento` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Produtos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `quantidade` INTEGER NULL,
    `valorUnitario` DOUBLE NULL,
    `tipo` ENUM('Base', 'Customizado') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cotacao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `data` DATETIME(3) NOT NULL,
    `valor` DOUBLE NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ListaInsumos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `quantidade` INTEGER NULL,
    `idProduto` INTEGER NULL,
    `idInsumo` INTEGER NULL,
    `idCotacao` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Orcamentos` ADD CONSTRAINT `Orcamentos_idCliente_fkey` FOREIGN KEY (`idCliente`) REFERENCES `Clientes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pedidos` ADD CONSTRAINT `Pedidos_idOrcamento_fkey` FOREIGN KEY (`idOrcamento`) REFERENCES `Orcamentos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ListaInsumos` ADD CONSTRAINT `ListaInsumos_idProduto_fkey` FOREIGN KEY (`idProduto`) REFERENCES `Produtos`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ListaInsumos` ADD CONSTRAINT `ListaInsumos_idInsumo_fkey` FOREIGN KEY (`idInsumo`) REFERENCES `Insumos`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ListaInsumos` ADD CONSTRAINT `ListaInsumos_idCotacao_fkey` FOREIGN KEY (`idCotacao`) REFERENCES `Cotacao`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
