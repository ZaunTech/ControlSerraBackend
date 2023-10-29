import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UsePipes, Query } from '@nestjs/common';
import { ListaInsumosService } from './lista-insumos.service';
import { CreateListaInsumoDto } from './dto/create-lista-insumo.dto';
import { UpdateListaInsumoDto } from './dto/update-lista-insumo.dto';
import { ApiTags } from '@nestjs/swagger';
import  {response as res} from 'express';

@ApiTags('lista-insumos')
@Controller('lista-insumos')
export class ListaInsumosController {
  constructor(private readonly listaInsumosService: ListaInsumosService) {}

  @Get('paginate')
  async findAllWithPagination(@Query('page') page: number, @Query('perPage') perPage: number) {
    page = page;
    perPage = perPage;
    const totalcount = await this.listaInsumosService.countAll();
    res.set('x-total-count', totalcount.toString());
    return await this.listaInsumosService.findAllWithPagination(page, perPage);
  }
  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() createListaInsumoDto: CreateListaInsumoDto) {
    return this.listaInsumosService.create(createListaInsumoDto);
  }

  @Get()
  findAll() {
    return this.listaInsumosService.findAll();
  }

  @Get('insumoProd/:id')
  findProdutoOrc(@Param('id') id: number)
  {
    return this.listaInsumosService.findInsumoProd(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.listaInsumosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateListaInsumoDto: UpdateListaInsumoDto) {
    return this.listaInsumosService.update(+id, updateListaInsumoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.listaInsumosService.remove(+id);
  }
}
