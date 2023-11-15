import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { UsuariosService } from '../src/modules/usuarios/usuarios.service';
import { PrismaService } from '../src/databases/prisma.service';
import { CreateUsuarioDto } from 'src/modules/usuarios/dto/create-usuario.dto';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function seedDatabase() {
  const createUser = async (createUsuarioDto: CreateUsuarioDto) => {
    if (true) {
      createUsuarioDto.senha = await bcrypt.hash(createUsuarioDto.senha, 10);
      const usuario = await prisma.usuario.create({
        data: createUsuarioDto,
      });
      usuario.senha = undefined;
      return usuario;
    }
  };

  await createUser({
    tipoUsuario: 'Administrador',
    nome: 'Admin',
    cpf: '99999999999',
    email: 'admin@admin.com',
    telefone: '1511111111',
    senha: 'admin',
  });

  for (let i = 0; i < 10; i++) {
    await createUser({
      tipoUsuario: faker.helpers.arrayElement([
        'Serralheiro',
        'Administrador',
        'Vendedor',
      ]),
      nome: faker.person.firstName(),
      cpf: faker.string.numeric({ length: 11 }),
      email: faker.internet.email(),
      telefone: faker.phone.number(),
      senha: faker.internet.password(),
    });
  }

  for (let i = 0; i < 10; i++) {
    await prisma.categoria.create({
      data: {
        tipo: faker.helpers.arrayElement([
          'Material',
          'Mão de obra',
          'Serviço',
        ]),
        titulo: faker.company.catchPhrase(),
        descricao: faker.lorem.paragraph(),
      },
    });
  }

  for (let i = 0; i < 20; i++) {
    await prisma.insumo.create({
      data: {
        titulo: faker.commerce.productName(),

        idCategoria: faker.number.int({ min: 1, max: 10 }),
      },
    });
  }

  for (let i = 0; i < 20; i++) {
    await prisma.variante.create({
      data: {
        variante: faker.commerce.productName(),
        idInsumo: faker.number.int({ min: 1, max: 20 }),
      },
    });
  }

  for (let i = 0; i < 10; i++) {
    await prisma.fornecedor.create({
      data: {
        email: faker.internet.email(),
        telefone: faker.phone.number(),
        contaTipo: faker.helpers.arrayElement(['Fisica', 'Juridica']),
        nome: faker.person.fullName(),
        cpf: faker.string.numeric({ length: 11 }),
        rg: faker.string.numeric({ length: 9 }),
        pais: faker.location.country(),
        cep: faker.location.zipCode(),
        estado: faker.location.state(),
        cidade: faker.location.city(),
        bairro: faker.location.city(),
        rua: faker.location.street(),
        numero: faker.location.buildingNumber(),
        complemento: faker.location.secondaryAddress(),
      },
    });
  }

  for (let i = 0; i < 10; i++) {
    await prisma.cliente.create({
      data: {
        email: faker.internet.email(),
        telefone: faker.phone.number(),
        contaTipo: faker.helpers.arrayElement(['Fisica', 'Juridica']),
        nome: faker.person.fullName(),
        cpf: faker.string.numeric({ length: 11 }),
        rg: faker.string.numeric({ length: 9 }),
        pais: faker.location.country(),
        cep: faker.location.zipCode(),
        estado: faker.location.state(),
        cidade: faker.location.city(),
        bairro: faker.location.city(),
        rua: faker.location.street(),
        numero: faker.location.buildingNumber(),
        complemento: faker.location.secondaryAddress(),
      },
    });
  }

  for (let i = 0; i < 30; i++) {
    await prisma.orcamento.create({
      data: {
        validade: faker.date.future(),
        dataOrcamento: faker.date.recent(),
        totalMaoObra: faker.number.float(),
        totalMateriais: faker.number.float(),
        status: faker.helpers.arrayElement([
          'Pendente',

          'Em_Processo',
          'Concluido',
        ]),
        prazoEstimadoProducao: faker.number.int({ min: 1, max: 30 }),
        observacoes: faker.lorem.sentence(),
        idCliente: faker.number.int({ min: 1, max: 10 }), // Gere um ID de cliente aleatório
      },
    });
  }
  let nextOrcamentoId = 1; // Inicializa o próximo ID de orçamento

  function generateUniqueOrcamentoId() {
    const id = nextOrcamentoId;
    nextOrcamentoId++; // Aumenta o próximo ID para a próxima chamada
    return id;
  }

  for (let i = 0; i < 10; i++) {
    await prisma.pedido.create({
      data: {
        pagamento: faker.number.float(),
        status: faker.helpers.arrayElement(['Pendente']),
        idOrcamento: generateUniqueOrcamentoId(), // Gere um ID de orçamento aleatório
      },
    });
  }

  for (let i = 0; i < 20; i++) {
    await prisma.produto.create({
      data: {
        titulo: faker.commerce.productName(),
        quantidade: faker.number.int({ min: 1, max: 10 }),
        valorUnitario: faker.number.float(),
        observacoes: faker.lorem.sentence(),
        idOrcamento: faker.number.int({ min: 1, max: 10 }), // Gere um ID de orçamento aleatório
      },
    });
  }

  for (let i = 0; i < 10; i++) {
    await prisma.cotacao.create({
      data: {
        data: faker.date.past(),
        valor: faker.number.float(),

        idFornecedor: faker.number.int({ min: 1, max: 10 }), // Gere um ID de fornecedor aleatório
        idVariante: faker.number.int({ min: 1, max: 20 }), // Gere um ID de insumo aleatório
      },
    });
  }

  for (let i = 0; i < 20; i++) {
    await prisma.listaInsumo.create({
      data: {
        quantidade: faker.number.int(),
        idProduto: faker.number.int({ min: 1, max: 20 }), // Gere um ID de produto aleatório
        idVariante: faker.number.int({ min: 1, max: 20 }), // Gere um ID de insumo aleatório
        idCotacao: faker.number.int({ min: 1, max: 10 }), // Gere um ID de cotação aleatório

        valorUnitario: faker.number.float(),
      },
    });
  }

  for (let i = 0; i < 10; i++) {
    await prisma.produtoBase.create({
      data: {
        titulo: faker.commerce.productName(),
        observacoes: faker.lorem.sentence(),
      },
    });
  }

  for (let i = 0; i < 20; i++) {
    await prisma.insumoProdutoBase.create({
      data: {
        quantidade: faker.number.float(),
        idProdutoBase: faker.number.int({ min: 1, max: 10 }), // Gere um ID de produto base aleatório
        idVariante: faker.number.int({ min: 1, max: 20 }), // Gere um ID de insumo aleatório
      },
    });
  }

  console.log('Dados populados com sucesso');
}

seedDatabase()
  .catch((error) => {
    console.error('Erro ao popular o banco de dados:', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
