
import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, Query } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { ApiTags } from '@nestjs/swagger';
import { response as res } from 'express';
@ApiTags('produtos')
@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Get('paginate')
  async findAllWithPagination(@Query('page') page: number, @Query('perPage') perPage: number) {
    page = page;
    perPage = perPage;
    const totalcount = await this.produtosService.countAll();
    res.set('x-total-count', totalcount.toString());
    return await this.produtosService.findAllWithPagination(page, perPage);
  }
  @Get('count')
  async countAll(){
    return await this.produtosService.countAll();
  }

  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() createProdutoDto: CreateProdutoDto) {
    return await this.produtosService.create(createProdutoDto);
  }

  @Post(':idProdBase/:idOrc')
  createProdFromBase(@Param('idProdBase') idProdBase: number, @Param('idOrc') idOrc: number) {
    return this.produtosService.pullProdBase(+idProdBase, +idOrc);
  }

  @Get('prodOrc/:id')
  findProdutoOrc(@Param('id') id: number)
  {
    return this.produtosService.findProdutoOrc(+id);
  }

  @Get(':busca')
  async findManyByTitle(@Param('titulo') buscaparam: string)
  {
    return await this.produtosService.findManyByTitle(buscaparam);
  }

  @Get()
  async findAll() {
    return await this.produtosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.produtosService.findOne(+id);
  }

  @UsePipes(ValidationPipe)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProdutoDto: UpdateProdutoDto) {
    return await this.produtosService.update(+id, updateProdutoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.produtosService.remove(+id);
  }
}
