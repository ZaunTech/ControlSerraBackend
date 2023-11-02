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
import { IsPublic } from '../auth/decorators/is-public.decorator';


@ApiTags('categorias')
@Controller('categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Get('count')
  async countAll(){
    return await this.categoriasService.countAllCategorias();
  }
  @IsPublic()
  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() createCategoriaDto: CreateCategoriaDto) {
    return await this.categoriasService.create(createCategoriaDto);
  }

  @IsPublic()
  @Get()
  async findAll() {
    return this.categoriasService.findAll();
  }

  @Get(':busca')
  async findManyByTitle(@Param('busca') buscaParam: string) {
    return await this.categoriasService.findManyByTitle(buscaParam);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.categoriasService.findOne(+id);
  }

  @IsPublic()
  @UsePipes(ValidationPipe)
  @Patch(':id')
  async update(@Param('id') id: string,@Body() updateCategoriaDto: UpdateCategoriaDto,) {
    return await this.categoriasService.update(+id, updateCategoriaDto);
  }
  @IsPublic()
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.categoriasService.remove(+id);
  }
}
