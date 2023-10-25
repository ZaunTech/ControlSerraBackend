import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InsumosProdutosBaseService } from './insumos-produtos-base.service';
import { CreateInsumosProdutosBaseDto } from './dto/create-insumo-produtos-base.dto';
import { UpdateInsumosProdutosBaseDto } from './dto/update-insumo-produtos-base.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('insumos-produtos-base')
@Controller('insumos-produtos-base')
export class InsumosProdutosBaseController {
  constructor(private readonly insumosProdutosBaseService: InsumosProdutosBaseService) {}

  @Get('count')
  countAll() {
    return this.insumosProdutosBaseService.countAll();
  }

  @Get('insumoProd/:id')
  findProdutoOrc(@Param('id') id: number)
  {
    return this.insumosProdutosBaseService.findInsumoProdBase(+id);
  }

  @Post()
  create(@Body() createInsumosProdutosBaseDto: CreateInsumosProdutosBaseDto) {
    return this.insumosProdutosBaseService.create(createInsumosProdutosBaseDto);
  }

  @Get()
  findAll() {
    return this.insumosProdutosBaseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.insumosProdutosBaseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInsumosProdutosBaseDto: UpdateInsumosProdutosBaseDto) {
    return this.insumosProdutosBaseService.update(+id, updateInsumosProdutosBaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.insumosProdutosBaseService.remove(+id);
  }
}
