import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
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
  //USUARIOS
  await createUser({
    tipoUsuario: 'Administrador',
    nome: 'Convidado',
    cpf: '51960443967',
    email: 'admin@admin.com',
    telefone: '8138225561',
    senha: 'admin',
  });

  await createUser({
    tipoUsuario: 'Serralheiro',
    nome: 'Isis Letícia Monteiro',
    cpf: '51960443968',
    email: 'isis-monteiro75@eanac.com.br',
    telefone: '67998947436',
    senha: 'admin',
  });

  await createUser({
    tipoUsuario: 'Serralheiro',
    nome: 'Fábio Marcos Araújo',
    cpf: '65779714207',
    email: 'fabio_araujo@transportadoratransdel.com.br',
    telefone: '4426720740',
    senha: 'admin',
  });

  await createUser({
    tipoUsuario: 'Serralheiro',
    nome: 'Yuri Isaac Roberto Nascimento',
    cpf: '01462971210',
    email: 'yuriisaacnascimento@academiahct.com.br',
    telefone: '96996038541',
    senha: 'admin',
  });

  await createUser({
    tipoUsuario: 'Serralheiro',
    nome: 'Oliver Matheus Aparício',
    cpf: '31866807781',
    email: 'oliver_matheus_aparicio@europamotors.com.br',
    telefone: '85998182177',
    senha: 'admin',
  });

  await createUser({
    tipoUsuario: 'Serralheiro',
    nome: 'Luciana Lúcia Corte Real',
    cpf: '05036225244',
    email: 'luciana.lucia.cortereal@unipsicotaubate.com.br',
    telefone: '84988383056',
    senha: 'admin',
  });

  //CATEGORIAS
  await prisma.categoria.create({
    data: {
      tipo: 'Insumo',
      titulo: 'Metais',
      descricao: 'Ferros/Metais',
    },
  });
  await prisma.categoria.create({
    data: {
      tipo: 'Mão de Obra',
      titulo: 'Pinturas',
      descricao: 'Serviço',
    },
  });
  await prisma.categoria.create({
    data: {
      tipo: 'Insumo',
      titulo: 'Serras',
      descricao: '',
    },
  });
  await prisma.categoria.create({
    data: {
      tipo: 'Insumo',
      titulo: 'Laminas',
      descricao: '',
    },
  });
  await prisma.categoria.create({
    data: {
      tipo: 'Insumo',
      titulo: 'Chapa',
      descricao: '',
    },
  });
  await prisma.categoria.create({
    data: {
      tipo: 'Insumo',
      titulo: 'Tubos',
      descricao: '',
    },
  });
  await prisma.categoria.create({
    data: {
      tipo: 'Mão de Obra',
      titulo: 'Portas',
      descricao: 'Serviço',
    },
  });
  await prisma.categoria.create({
    data: {
      tipo: 'Mão de Obra',
      titulo: 'Treliças',
      descricao: 'Serviço',
    },
  });

  //INSUMOS
  await prisma.insumo.create({
    data: {
      titulo: 'Metalon',
      idCategoria: 1,
    },
  });

  await prisma.insumo.create({
    data: {
      titulo: 'Pintura',
      idCategoria: 2,
    },
  });
  await prisma.insumo.create({
    data: {
      titulo: 'Disco de Corte',
      idCategoria: 3,
    },
  });
  await prisma.insumo.create({
    data: {
      titulo: 'Placa Cimentícia',
      idCategoria: 5,
    },
  });
  await prisma.insumo.create({
    data: {
      titulo: 'Barra Roscada',
      idCategoria: 1,
    },
  });
  await prisma.insumo.create({
    data: {
      titulo: 'Chapa',
      idCategoria: 4,
    },
  });

  //VARIANTES
  await prisma.variante.create({
    data: {
      variante: '50x30 Br 6m 3,00mm',
      idInsumo: 1,
    },
  });
  await prisma.variante.create({
    data: {
      variante: '50x50 Br 8m 2,00mm',
      idInsumo: 1,
    },
  });
  await prisma.variante.create({
    data: {
      variante: '50x30 Br 6m 2,00mm',
      idInsumo: 1,
    },
  });
  await prisma.variante.create({
    data: {
      variante: '50x50 Br 6m 2,00mm',
      idInsumo: 1,
    },
  });
  await prisma.variante.create({
    data: {
      variante: '50x50 Br 6m 1,50mm',
      idInsumo: 1,
    },
  });

  await prisma.variante.create({
    data: {
      variante: '4.1/2',
      idInsumo: 3,
    },
  });
  await prisma.variante.create({
    data: {
      variante: '12 (Fino)',
      idInsumo: 3,
    },
  });
  await prisma.variante.create({
    data: {
      variante: '7',
      idInsumo: 3,
    },
  });
  await prisma.variante.create({
    data: {
      variante: '10mm 1,20 x 2,00',
      idInsumo: 4,
    },
  });
  await prisma.variante.create({
    data: {
      variante: '10mm 1,20 x 2,40',
      idInsumo: 4,
    },
  });
  await prisma.variante.create({
    data: {
      variante: '10mm 1,00 x 2,40',
      idInsumo: 4,
    },
  });

  await prisma.variante.create({
    data: {
      variante: '2,00 x 1,00 m',
      idInsumo: 6,
    },
  });
  await prisma.variante.create({
    data: {
      variante: '4,00 x 2,40 m',
      idInsumo: 6,
    },
  });
  await prisma.variante.create({
    data: {
      variante: '3,00 x 1,20 m',
      idInsumo: 6,
    },
  });
  await prisma.variante.create({
    data: {
      variante: '2,00 x 1,20 m',
      idInsumo: 6,
    },
  });
  await prisma.variante.create({
    data: {
      variante: 'Acrílico',
      idInsumo: 2,
    },
  });
  await prisma.variante.create({
    data: {
      variante: 'esmalte',
      idInsumo: 2,
    },
  });
  await prisma.variante.create({
    data: {
      variante: 'epóxi',
      idInsumo: 2,
    },
  });
  await prisma.variante.create({
    data: {
      variante: 'látex',
      idInsumo: 2,
    },
  });
  //CLIENTES
  await prisma.cliente.create({
    data: {
      email: 'vitor_dacruz@viavaleseguros.com.br',
      telefone: '98987098845',
      contaTipo: 'Fisica',
      nome: 'Vitor Renato Paulo da Cruz',
      cpf: '94963377160',
      rg: '235096167',
      pais: 'Brasil',
      cep: '65049290',
      estado: 'MA',
      cidade: 'São Luís',
      bairro: 'Cutim Anil',
      rua: 'Rua Antônio Vitória Cano',
      numero: '21',
      complemento: 'sobrado',
    },
  });

  await prisma.cliente.create({
    data: {
      email: 'rafael_eduardo_darosa@orteca.com.br',
      telefone: '95988444711',
      contaTipo: 'Fisica',
      nome: 'Rafael Eduardo José da Rosa',
      cpf: '95457987183',
      rg: '134988905',
      pais: 'Brasil',
      cep: '69317232',
      estado: 'RR',
      cidade: 'Boa Vista',
      bairro: 'Alvorada',
      rua: 'Rua Jorge Dias Carneiro',
      numero: '17',
      complemento: 'casa',
    },
  });

  await prisma.cliente.create({
    data: {
      email: 'yago_vieira@bat.com',
      telefone: '9636478278',
      contaTipo: 'Fisica',
      nome: 'Yago Bruno Vieira',
      cpf: '59420571688',
      rg: '262424630',
      pais: 'Brasil',
      cep: '68906084',
      estado: 'AP',
      cidade: 'Macapá',
      bairro: 'Goiabal',
      rua: 'Rua Angola',
      numero: '86',
      complemento: 'fundos',
    },
  });

  await prisma.cliente.create({
    data: {
      email: 'auditoria@muriloestellatelecomunicacoesme.com.br',
      telefone: '1128482451',
      contaTipo: 'Juridica',
      nomeFantasia: 'Murilo e Stella Telecomunicações ME',
      cnpj: '58368409000145',
      razaoSocial: 'Murilo e Stella Telecomunicações ME',
      pais: 'Brasil',
      cep: '12927040',
      estado: 'SP',
      cidade: 'Bragança Paulista',
      bairro: 'Núcleo Residencial Henedina Rodrigues Cortez',
      rua: 'Rua Gentil José de Matos',
      numero: '704',
      complemento: '',
    },
  });

  await prisma.cliente.create({
    data: {
      email: 'administracao@joaoetaniagraficaltda.com.br',
      telefone: '3538242833',
      contaTipo: 'Juridica',
      nomeFantasia: 'João e Tânia Gráfica Ltda',
      cnpj: '79865260000180',
      razaoSocial: 'João e Tânia Gráfica Ltda',
      pais: 'Brasil',
      cep: '37701064',
      estado: 'MG',
      cidade: 'Poços de Caldas',
      bairro: 'Vila Nossa Senhora de Fátima',
      rua: 'Alameda Edson',
      numero: '275',
      complemento: '',
    },
  });

  await prisma.cliente.create({
    data: {
      email: 'presidencia@renaneliviacontabilltda.com.br',
      telefone: '2138258163',
      contaTipo: 'Juridica',
      nomeFantasia: 'Renan e Lívia Contábil Ltda',
      cnpj: '60861961000112',
      razaoSocial: 'Renan e Lívia Contábil Ltda',
      pais: 'Brasil',
      cep: '22723590',
      estado: 'RJ',
      cidade: 'Rio de Janeiro',
      bairro: 'Taquara',
      rua: 'Rua dos Geógrafos',
      numero: '150',
      complemento: '',
    },
  });

  //FORNECEDORES
  await prisma.fornecedor.create({
    data: {
      email: 'acobraga@gmail.com.br',
      telefone: '1128989475',
      contaTipo: 'Juridica',
      nomeFantasia: 'Aços Bragança',
      cnpj: '53450617000175',
      razaoSocial: 'Aços Bragança',
      pais: 'Brasil',
      cep: '07082600',
      estado: 'SP',
      cidade: 'Guarulhos',
      bairro: 'Jardim City',
      rua: 'Rua Dirceu Rocha Dias',
      numero: '701',
      complemento: '',
    },
  });

  await prisma.fornecedor.create({
    data: {
      email: 'anfer@gmail.com.br',
      telefone: '1726956067',
      contaTipo: 'Juridica',
      nomeFantasia: 'Anfer',
      cnpj: '80481939000154',
      razaoSocial: 'Anfer',
      pais: 'Brasil',
      cep: '15062006',
      estado: 'SP',
      cidade: 'São José do Rio Preto',
      bairro: 'Chácara Jockey Club (Zona Rural)',
      rua: 'Estrada Nelson Vitalino',
      numero: '240',
      complemento: '',
    },
  });

  await prisma.fornecedor.create({
    data: {
      email: 'ponto.serra@gmail.com.br',
      telefone: '1126784199',
      contaTipo: 'Juridica',
      nomeFantasia: 'Ponto Serra',
      cnpj: '87331592000102',
      razaoSocial: 'Ponto Serra',
      pais: 'Brasil',
      cep: '07830460',
      estado: 'SP',
      cidade: 'Franco da Rocha',
      bairro: 'Vila Cariri',
      rua: 'Estrada Sete Voltas',
      numero: '123',
      complemento: '',
    },
  });

  await prisma.fornecedor.create({
    data: {
      email: 'baurufer@gmail.com.br',
      telefone: '1139737192',
      contaTipo: 'Juridica',
      nomeFantasia: 'Baurufer',
      cnpj: '36314123000144',
      razaoSocial: 'Baurufer',
      pais: 'Brasil',
      cep: '01005020',
      estado: 'SP',
      cidade: 'São Paulo',
      bairro: 'Chico de Paula',
      rua: 'Rua São Francisco',
      numero: '850',
      complemento: '',
    },
  });

  await prisma.fornecedor.create({
    data: {
      email: 'destak@gmail.com.br',
      telefone: '1429037423',
      contaTipo: 'Juridica',
      nomeFantasia: 'Destak',
      cnpj: '87058422000104',
      razaoSocial: 'Destak',
      pais: 'Brasil',
      cep: '17066590',
      estado: 'SP',
      cidade: 'Bauru',
      bairro: 'Parque Jaraguá',
      rua: 'Rua Professor Ayrton Busch',
      numero: '275',
      complemento: '',
    },
  });

  await prisma.fornecedor.create({
    data: {
      email: 'joseense@gmail.com.br',
      telefone: '1137497095',
      contaTipo: 'Juridica',
      nomeFantasia: 'Aços Joseense',
      cnpj: '47806122000133',
      razaoSocial: 'Aços Joseense',
      pais: 'Brasil',
      cep: '05545200',
      estado: 'SP',
      cidade: 'São Paulo',
      bairro: 'Jardim Monte Alegre',
      rua: 'Rua Deolicio Alves de Souza',
      numero: '755',
      complemento: '',
    },
  });

  //ORÇAMENTOS
  await prisma.orcamento.create({
    data: {
      validade: faker.date.future(),
      dataOrcamento: faker.date.recent(),
      totalMaoObra: 1500,
      totalMateriais: 3470,
      status: faker.helpers.arrayElement([
        'Pendente',
        'Em_Processo',
        'Concluido',
      ]),
      prazoEstimadoProducao: faker.number.int({ min: 1, max: 30 }),
      observacoes: 'Mesa de 3 x 3 x 3',
      idCliente: faker.number.int({ min: 1, max: 6 }), // Gere um ID de cliente aleatório
    },
  });

  await prisma.orcamento.create({
    data: {
      validade: faker.date.future(),
      dataOrcamento: faker.date.recent(),
      totalMaoObra: 3000,
      totalMateriais: 3223.5,
      status: faker.helpers.arrayElement([
        'Pendente',
        'Em_Processo',
        'Concluido',
      ]),
      prazoEstimadoProducao: faker.number.int({ min: 1, max: 30 }),
      observacoes: '',
      idCliente: faker.number.int({ min: 1, max: 6 }), // Gere um ID de cliente aleatório
    },
  });

  await prisma.orcamento.create({
    data: {
      validade: faker.date.future(),
      dataOrcamento: faker.date.recent(),
      totalMaoObra: 600,
      totalMateriais: 1320,
      status: faker.helpers.arrayElement([
        'Pendente',
        'Em_Processo',
        'Concluido',
      ]),
      prazoEstimadoProducao: faker.number.int({ min: 1, max: 30 }),
      observacoes: '',
      idCliente: faker.number.int({ min: 1, max: 6 }), // Gere um ID de cliente aleatório
    },
  });

  await prisma.orcamento.create({
    data: {
      validade: faker.date.future(),
      dataOrcamento: faker.date.recent(),
      totalMaoObra: 1905,
      totalMateriais: 1330,
      status: faker.helpers.arrayElement([
        'Pendente',
        'Em_Processo',
        'Concluido',
      ]),
      prazoEstimadoProducao: faker.number.int({ min: 1, max: 30 }),
      observacoes: '',
      idCliente: faker.number.int({ min: 1, max: 6 }), // Gere um ID de cliente aleatório
    },
  });

  await prisma.orcamento.create({
    data: {
      validade: faker.date.future(),
      dataOrcamento: faker.date.recent(),
      totalMaoObra: 7000,
      totalMateriais: 5600,
      status: faker.helpers.arrayElement([
        'Pendente',
        'Em_Processo',
        'Concluido',
      ]),
      prazoEstimadoProducao: faker.number.int({ min: 1, max: 30 }),
      observacoes: '',
      idCliente: faker.number.int({ min: 1, max: 6 }), // Gere um ID de cliente aleatório
    },
  });

  await prisma.orcamento.create({
    data: {
      validade: faker.date.future(),
      dataOrcamento: faker.date.recent(),
      totalMaoObra: 14000,
      totalMateriais: 17224.9,
      status: faker.helpers.arrayElement([
        'Pendente',
        'Em_Processo',
        'Concluido',
      ]),
      prazoEstimadoProducao: faker.number.int({ min: 1, max: 30 }),
      observacoes: '',
      idCliente: faker.number.int({ min: 1, max: 6 }), // Gere um ID de cliente aleatório
    },
  });

  await prisma.orcamento.create({
    data: {
      validade: faker.date.future(),
      dataOrcamento: faker.date.recent(),
      totalMaoObra: 710,
      totalMateriais: 890.2,
      status: faker.helpers.arrayElement([
        'Pendente',
        'Em_Processo',
        'Concluido',
      ]),
      prazoEstimadoProducao: faker.number.int({ min: 1, max: 30 }),
      observacoes: '',
      idCliente: faker.number.int({ min: 1, max: 6 }), // Gere um ID de cliente aleatório
    },
  });

  await prisma.orcamento.create({
    data: {
      validade: faker.date.future(),
      dataOrcamento: faker.date.recent(),
      totalMaoObra: 1260,
      totalMateriais: 990,
      status: faker.helpers.arrayElement([
        'Pendente',
        'Em_Processo',
        'Concluido',
      ]),
      prazoEstimadoProducao: faker.number.int({ min: 1, max: 30 }),
      observacoes: '',
      idCliente: faker.number.int({ min: 1, max: 6 }), // Gere um ID de cliente aleatório
    },
  });

  await prisma.orcamento.create({
    data: {
      validade: faker.date.future(),
      dataOrcamento: faker.date.recent(),
      totalMaoObra: 5432,
      totalMateriais: 2345,
      status: faker.helpers.arrayElement([
        'Pendente',
        'Em_Processo',
        'Concluido',
      ]),
      prazoEstimadoProducao: faker.number.int({ min: 1, max: 30 }),
      observacoes: '',
      idCliente: faker.number.int({ min: 1, max: 6 }), // Gere um ID de cliente aleatório
    },
  });

  await prisma.orcamento.create({
    data: {
      validade: faker.date.future(),
      dataOrcamento: faker.date.recent(),
      totalMaoObra: 3455,
      totalMateriais: 1200.5,
      status: faker.helpers.arrayElement([
        'Pendente',
        'Em_Processo',
        'Concluido',
      ]),
      prazoEstimadoProducao: faker.number.int({ min: 1, max: 30 }),
      observacoes: '',
      idCliente: faker.number.int({ min: 1, max: 6 }), // Gere um ID de cliente aleatório
    },
  });

  await prisma.orcamento.create({
    data: {
      validade: faker.date.future(),
      dataOrcamento: faker.date.recent(),
      totalMaoObra: 504,
      totalMateriais: 943.5,
      status: faker.helpers.arrayElement([
        'Pendente',
        'Em_Processo',
        'Concluido',
      ]),
      prazoEstimadoProducao: faker.number.int({ min: 1, max: 30 }),
      observacoes: '',
      idCliente: faker.number.int({ min: 1, max: 6 }), // Gere um ID de cliente aleatório
    },
  });

  await prisma.orcamento.create({
    data: {
      validade: faker.date.future(),
      dataOrcamento: faker.date.recent(),
      totalMaoObra: 253,
      totalMateriais: 449.7,
      status: faker.helpers.arrayElement([
        'Pendente',
        'Em_Processo',
        'Concluido',
      ]),
      prazoEstimadoProducao: faker.number.int({ min: 1, max: 30 }),
      observacoes: '',
      idCliente: faker.number.int({ min: 1, max: 6 }), // Gere um ID de cliente aleatório
    },
  });

  let nextOrcamentoId = 1; // Inicializa o próximo ID de orçamento

  function generateUniqueOrcamentoId() {
    const id = nextOrcamentoId;
    nextOrcamentoId++; // Aumenta o próximo ID para a próxima chamada
    return id;
  }

  //PEDIDOS
  for (let i = 0; i < 6; i++) {
    await prisma.pedido.create({
      data: {
        pagamento: faker.number.int({ min: 30, max: 20000 }),
        status: faker.helpers.arrayElement(['Pendente']),
        idOrcamento: generateUniqueOrcamentoId(), // Gere um ID de orçamento aleatório
      },
    });
  }

  //PRODUTOS
  await prisma.produto.create({
    data: {
      titulo: 'Portão 2M x 3M',
      quantidade: 1,
      valorUnitario: 100,
      observacoes: '',
      idOrcamento: 3,
      valorMaoDeObra: 50,
      valorMaterial: 50,
    },
  });
  await prisma.produto.create({
    data: {
      titulo: 'Portão 2M x 3M',
      quantidade: 1,
      valorUnitario: 100,
      observacoes: '',
      idOrcamento: 3,
      valorMaoDeObra: 50,
      valorMaterial: 50,
    },
  });
  await prisma.produto.create({
    data: {
      titulo: 'QUADRO EM GRAU P/ VIDRO BANHEIRO',
      quantidade: 1,
      valorUnitario: 100,
      observacoes: '',
      idOrcamento: 2,
      valorMaoDeObra: 50,
      valorMaterial: 50,
    },
  });
  await prisma.produto.create({
    data: {
      titulo: 'PRATELEIRA COZINHA',
      quantidade: 1,
      valorUnitario: 100,
      observacoes: '',
      idOrcamento: 2,
      valorMaoDeObra: 50,
      valorMaterial: 50,
    },
  });
  await prisma.produto.create({
    data: {
      titulo: 'PINTURA ELETROSTÁTICA',
      quantidade: 1,
      valorUnitario: 100,
      observacoes: '',
      idOrcamento: 1,
      valorMaoDeObra: 50,
      valorMaterial: 50,
    },
  });
  await prisma.produto.create({
    data: {
      titulo: 'SUPORTE P/ VINHO  ( 24 GARRAFAS )',
      quantidade: 1,
      valorUnitario: 100,
      observacoes: '',
      idOrcamento: 1,
      valorMaoDeObra: 50,
      valorMaterial: 50,
    },
  });
  await prisma.produto.create({
    data: {
      titulo: 'PINTURA ELETROSTÁTICA',
      quantidade: 1,
      valorUnitario: 100,
      observacoes: '',
      idOrcamento: 1,
      valorMaoDeObra: 50,
      valorMaterial: 50,
    },
  });
  await prisma.produto.create({
    data: {
      titulo: 'SUPORTE P/ VINHO  ( 24 GARRAFAS )',
      quantidade: 1,
      valorUnitario: 100,
      observacoes: '',
      idOrcamento: 1,
      valorMaoDeObra: 50,
      valorMaterial: 50,
    },
  });
  await prisma.produto.create({
    data: {
      titulo: 'PINTURA ELETROSTÁTICA',
      quantidade: 1,
      valorUnitario: 100,
      observacoes: '',
      idOrcamento: 4,
      valorMaoDeObra: 50,
      valorMaterial: 50,
    },
  });
  await prisma.produto.create({
    data: {
      titulo: 'SUPORTE P/ VINHO  ( 24 GARRAFAS )',
      quantidade: 1,
      valorUnitario: 100,
      observacoes: '',
      idOrcamento: 3,
      valorMaoDeObra: 50,
      valorMaterial: 50,
    },
  });

  //COTAÇÕES
  await prisma.cotacao.create({
    data: {
      data: faker.date.past(),
      valor: 100,

      idFornecedor: 1, // Gere um ID de fornecedor aleatório
      idVariante: 1, // Gere um ID de insumo aleatório
    },
  });
  await prisma.cotacao.create({
    data: {
      data: faker.date.past(),
      valor: 120,

      idFornecedor: 2, // Gere um ID de fornecedor aleatório
      idVariante: 1, // Gere um ID de insumo aleatório
    },
  });
  await prisma.cotacao.create({
    data: {
      data: faker.date.past(),
      valor: 140,

      idFornecedor: 3, // Gere um ID de fornecedor aleatório
      idVariante: 1, // Gere um ID de insumo aleatório
    },
  });
  await prisma.cotacao.create({
    data: {
      data: faker.date.past(),
      valor: 95,

      idFornecedor: 5, // Gere um ID de fornecedor aleatório
      idVariante: 1, // Gere um ID de insumo aleatório
    },
  });
  await prisma.cotacao.create({
    data: {
      data: faker.date.past(),
      valor: 90,

      idFornecedor: 4, // Gere um ID de fornecedor aleatório
      idVariante: 3, // Gere um ID de insumo aleatório
    },
  });
  await prisma.cotacao.create({
    data: {
      data: faker.date.past(),
      valor: 95,

      idFornecedor: 1, // Gere um ID de fornecedor aleatório
      idVariante: 3, // Gere um ID de insumo aleatório
    },
  });
  await prisma.cotacao.create({
    data: {
      data: faker.date.past(),
      valor: 98,

      idFornecedor: 3, // Gere um ID de fornecedor aleatório
      idVariante: 3, // Gere um ID de insumo aleatório
    },
  });
  await prisma.cotacao.create({
    data: {
      data: faker.date.past(),
      valor: 80,

      idFornecedor: 5, // Gere um ID de fornecedor aleatório
      idVariante: 3, // Gere um ID de insumo aleatório
    },
  });
  await prisma.cotacao.create({
    data: {
      data: faker.date.past(),
      valor: 50,

      idFornecedor: 6, // Gere um ID de fornecedor aleatório
      idVariante: 6, // Gere um ID de insumo aleatório
    },
  });
  await prisma.cotacao.create({
    data: {
      data: faker.date.past(),
      valor: 80,

      idFornecedor: 4, // Gere um ID de fornecedor aleatório
      idVariante: 6, // Gere um ID de insumo aleatório
    },
  });
  await prisma.cotacao.create({
    data: {
      data: faker.date.past(),
      valor: 70,

      idFornecedor: 3, // Gere um ID de fornecedor aleatório
      idVariante: 6, // Gere um ID de insumo aleatório
    },
  });
  await prisma.cotacao.create({
    data: {
      data: faker.date.past(),
      valor: 60,

      idFornecedor: 2, // Gere um ID de fornecedor aleatório
      idVariante: 6, // Gere um ID de insumo aleatório
    },
  });
  await prisma.cotacao.create({
    data: {
      data: faker.date.past(),
      valor: 60,

      idFornecedor: 2, // Gere um ID de fornecedor aleatório
      idVariante: 6, // Gere um ID de insumo aleatório
    },
  });
  await prisma.cotacao.create({
    data: {
      data: faker.date.past(),
      valor: 60,

      idFornecedor: 1, // Gere um ID de fornecedor aleatório
      idVariante: 9, // Gere um ID de insumo aleatório
    },
  });
  await prisma.cotacao.create({
    data: {
      data: faker.date.past(),
      valor: 60,

      idFornecedor: 2, // Gere um ID de fornecedor aleatório
      idVariante: 9, // Gere um ID de insumo aleatório
    },
  });
  await prisma.cotacao.create({
    data: {
      data: faker.date.past(),
      valor: 60,

      idFornecedor: 3, // Gere um ID de fornecedor aleatório
      idVariante: 9, // Gere um ID de insumo aleatório
    },
  });
  await prisma.cotacao.create({
    data: {
      data: faker.date.past(),
      valor: 60,

      idFornecedor: 4, // Gere um ID de fornecedor aleatório
      idVariante: 9, // Gere um ID de insumo aleatório
    },
  });
  await prisma.cotacao.create({
    data: {
      data: faker.date.past(),
      valor: 60,

      idFornecedor: 1, // Gere um ID de fornecedor aleatório
      idVariante: 10, // Gere um ID de insumo aleatório
    },
  });
  await prisma.cotacao.create({
    data: {
      data: faker.date.past(),
      valor: 60,

      idFornecedor: 2, // Gere um ID de fornecedor aleatório
      idVariante: 10, // Gere um ID de insumo aleatório
    },
  });
  await prisma.cotacao.create({
    data: {
      data: faker.date.past(),
      valor: 60,

      idFornecedor: 3, // Gere um ID de fornecedor aleatório
      idVariante: 10, // Gere um ID de insumo aleatório
    },
  });
  await prisma.cotacao.create({
    data: {
      data: faker.date.past(),
      valor: 60,

      idFornecedor: 4, // Gere um ID de fornecedor aleatório
      idVariante: 10, // Gere um ID de insumo aleatório
    },
  });

  //LISTA INSUMOS
  await prisma.listaInsumo.create({
    data: {
      quantidade: faker.number.int({ min: 1, max: 6 }),
      idProduto: faker.number.int({ min: 1, max: 6 }), // Gere um ID de produto aleatório
      idVariante: 1, // Gere um ID de insumo aleatório
      idCotacao: 1, // Gere um ID de cotação aleatório
      valorUnitario: faker.number.int({ min: 50, max: 500 }),
    },
  });
  await prisma.listaInsumo.create({
    data: {
      quantidade: faker.number.int({ min: 1, max: 6 }),
      idProduto: faker.number.int({ min: 1, max: 6 }), // Gere um ID de produto aleatório
      idVariante: 1, // Gere um ID de insumo aleatório
      idCotacao: 2, // Gere um ID de cotação aleatório
      valorUnitario: faker.number.int({ min: 50, max: 500 }),
    },
  });
  await prisma.listaInsumo.create({
    data: {
      quantidade: faker.number.int({ min: 1, max: 6 }),
      idProduto: faker.number.int({ min: 1, max: 6 }), // Gere um ID de produto aleatório
      idVariante: 1, // Gere um ID de insumo aleatório
      idCotacao: 3, // Gere um ID de cotação aleatório
      valorUnitario: faker.number.int({ min: 50, max: 500 }),
    },
  });
  await prisma.listaInsumo.create({
    data: {
      quantidade: faker.number.int({ min: 1, max: 6 }),
      idProduto: faker.number.int({ min: 1, max: 6 }), // Gere um ID de produto aleatório
      idVariante: 6, // Gere um ID de insumo aleatório
      idCotacao: 1, // Gere um ID de cotação aleatório
      valorUnitario: faker.number.int({ min: 50, max: 500 }),
    },
  });
  await prisma.listaInsumo.create({
    data: {
      quantidade: faker.number.int({ min: 1, max: 6 }),
      idProduto: faker.number.int({ min: 1, max: 6 }), // Gere um ID de produto aleatório
      idVariante: 5, // Gere um ID de insumo aleatório
      idCotacao: 2, // Gere um ID de cotação aleatório
      valorUnitario: faker.number.int({ min: 50, max: 500 }),
    },
  });

  //PRODUTOS BASE
  await prisma.produtoBase.create({
    data: {
      titulo: 'Portão 2 x 2m',
      observacoes: '',
    },
  });

  await prisma.produtoBase.create({
    data: {
      titulo: 'Portão 3 x 3m',
      observacoes: '',
    },
  });

  await prisma.produtoBase.create({
    data: {
      titulo: 'Portão 4 x 4m',
      observacoes: '',
    },
  });

  await prisma.produtoBase.create({
    data: {
      titulo: 'Janela 1 x 2m',
      observacoes: '',
    },
  });

  await prisma.produtoBase.create({
    data: {
      titulo: 'Suporte para espelho 20 x 20cm',
      observacoes: '',
    },
  });

  await prisma.produtoBase.create({
    data: {
      titulo: 'telha 2 x 2',
      observacoes: '',
    },
  });

  //INSUMOS BASE
  for (let i = 0; i < 12; i++) {
    await prisma.insumoProdutoBase.create({
      data: {
        quantidade: faker.number.int({ min: 1, max: 6 }),
        idProdutoBase: faker.number.int({ min: 1, max: 6 }), // Gere um ID de produto base aleatório
        idVariante: faker.number.int({ min: 1, max: 12 }), // Gere um ID de insumo aleatório
      },
    });
  }

  console.log('Dados populados com sucesso');
}

console.log('Populando a database...');
seedDatabase()
  .catch((error) => {
    console.error('Erro ao popular o banco de dados:', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log('Processo finalizado');
  });
