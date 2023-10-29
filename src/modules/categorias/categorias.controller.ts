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

import { CategoriasService } from './categorias.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { ApiTags } from '@nestjs/swagger';
import { response as res } from 'express';


@ApiTags('categorias')
@Controller('categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Get('paginate')
  async findAllWithPagination(@Query('page') page: number, @Query('perPage') perPage: number) {
  page = page;
  perPage = perPage;
  const totalcount = await this.categoriasService.countAllCategorias();

  res.set('x-total-count', totalcount.toString());
  return await this.categoriasService.findAllWithPagination(page, Number(perPage));
}

  @Get('count')
  countAll() {
    return this.categoriasService.countAllCategorias();
  }
  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() createCategoriaDto: CreateCategoriaDto) {
    return this.categoriasService.create(createCategoriaDto);
  }

  @Get()
  findAll() {
    return this.categoriasService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.categoriasService.findOne(+id);
  }

  @Get(':busca')
  findManyByTitle(@Param('busca') buscaParam: string) {
    return this.categoriasService.findManyByTitle(buscaParam);
  }
  @UsePipes(ValidationPipe)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoriaDto: UpdateCategoriaDto,
  ) {
    return this.categoriasService.update(+id, updateCategoriaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriasService.remove(+id);
  }
}
