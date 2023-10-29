import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  Query,
} from '@nestjs/common';
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
  async findAllWithPagination(
    @Query('page') page: number,
    @Query('perPage') perPage: number,
  ) {
    page = page;
    perPage = perPage;
    const totalcount = await this.produtosService.countAll();
    res.set('x-total-count', totalcount.toString());
    return await this.produtosService.findAllWithPagination(page, perPage);
  }
  @Get('count')
  countAll() {
    return this.produtosService.countAll();
  }

  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtosService.create(createProdutoDto);
  }

  @Post(':idProdBase/:idOrc')
  createProdFromBase(
    @Param('idProdBase') idProdBase: number,
    @Param('idOrc') idOrc: number,
  ) {
    return this.produtosService.pullProdBase(+idProdBase, +idOrc);
  }

  @Get('prodOrc/:id')
  findProdutoOrc(@Param('id') id: number) {
    return this.produtosService.findProdutoOrc(+id);
  }

  @Get(':busca')
  findManyByTitle(@Param('titulo') buscaparam: string) {
    return this.produtosService.findManyByTitle(buscaparam);
  }

  @Get()
  findAll() {
    return this.produtosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produtosService.findOne(+id);
  }

  @UsePipes(ValidationPipe)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProdutoDto: UpdateProdutoDto) {
    return this.produtosService.update(+id, updateProdutoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.produtosService.remove(+id);
  }
}
