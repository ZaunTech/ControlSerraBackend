import { Test, TestingModule } from '@nestjs/testing';
import { CotacoesController } from './cotacoes.controller';
import { CotacoesService } from './cotacoes.service';

describe('CotacaosController', () => {
  let controller: CotacoesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CotacoesController],
      providers: [CotacoesService],
    }).compile();

    controller = module.get<CotacoesController>(CotacoesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
