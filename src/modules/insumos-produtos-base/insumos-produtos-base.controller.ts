import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { InsumosProdutosBaseService } from './insumos-produtos-base.service';
import { CreateInsumosProdutosBaseDto } from './dto/create-insumo-produtos-base.dto';
import { UpdateInsumosProdutosBaseDto } from './dto/update-insumo-produtos-base.dto';
import { ApiTags } from '@nestjs/swagger';
import  {response as res} from 'express';
@ApiTags('insumos-produtos-base')
@Controller('insumos-produtos-base')
export class InsumosProdutosBaseController {
  constructor(private readonly insumosProdutosBaseService: InsumosProdutosBaseService) {}

  @Get('paginate')
async findAllWithPagination(@Query('page') page: number, @Query('perPage') perPage: number) {
  page = page;
  perPage = perPage;
  const totalcount = await this.insumosProdutosBaseService.countAll();
  res.set('x-total-count', totalcount.toString());
  return await this.insumosProdutosBaseService.findAllWithPagination(page, perPage);
}
  @Get('count')
  countAll() {
    return this.insumosProdutosBaseService.countAll();
  }

  @Get('insumoProd/:id')
  findProdutoOrc(@Param('id') id: number)
  {
    return this.insumosProdutosBaseService.findInsumoProdBase(+id);
  }

  @UsePipes(ValidationPipe)
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

  @UsePipes(ValidationPipe)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInsumosProdutosBaseDto: UpdateInsumosProdutosBaseDto) {
    return this.insumosProdutosBaseService.update(+id, updateInsumosProdutosBaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.insumosProdutosBaseService.remove(+id);
  }
}
