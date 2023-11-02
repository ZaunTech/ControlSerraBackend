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
import { addProdutoBaseDto } from './dto/addProdutoBase.dto';
import { IsPublic } from '../auth/decorators/is-public.decorator';
@ApiTags('produtos')
@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Get('count')
  async countAll(){
    return await this.produtosService.countAll();
  }
  @IsPublic()
  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() createProdutoDto: CreateProdutoDto) {
    return await this.produtosService.create(createProdutoDto);
  }
  @IsPublic()
  @Post(':idProdBase/:idOrc')
  async createProdFromBase(
    @Param('idProdBase') idProdBase: number,
    @Param('idOrc') idOrc: number,
  ) {
    return await this.produtosService.pullProdBase(+idProdBase, +idOrc);
  }
  @IsPublic()
  @Get('prodOrc/:id')
  findProdutoOrc(@Param('id') id: number) {
    return this.produtosService.findProdutoOrc(+id);
  }
  @IsPublic()
  @Get(':busca')
  async findManyByTitle(@Param('titulo') buscaparam: string)
  {
    return await this.produtosService.findManyByTitle(buscaparam);
  }
  @IsPublic()
  @Get()
  async findAll() {
    return await this.produtosService.findAll();
  }

  @IsPublic()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.produtosService.findOne(+id);
  }
  @IsPublic()
  @UsePipes(ValidationPipe)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProdutoDto: UpdateProdutoDto) {
    return await this.produtosService.update(+id, updateProdutoDto);
  }
  @IsPublic()
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.produtosService.remove(+id);
  }
}
