import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';

import { CotacoesService } from './cotacoes.service';
import { CreateCotacaoDto } from './dto/create-cotacao.dto';
import { UpdateCotacaoDto } from './dto/update-cotacao.dto';
import { ApiTags } from '@nestjs/swagger';
import { response as res } from "express";
import { IsPublic } from '../auth/decorators/is-public.decorator';
@ApiTags('cotacoes')
@Controller('cotacoes')
export class CotacoesController {
  constructor(private readonly cotacoesService: CotacoesService) {}

  @Get('count')
  async countAll() {
    return await this.cotacoesService.countAllCotacaos();
  }
  @IsPublic()
  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() createCotacaoDto: CreateCotacaoDto) {
    return await this.cotacoesService.create(createCotacaoDto);
  }
  @IsPublic()
  @Get()
  async findAll() {
    return await this.cotacoesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.cotacoesService.findOne(+id);
  }
  @IsPublic()
  @UsePipes(ValidationPipe)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCotacaoDto: UpdateCotacaoDto) {
    return await this.cotacoesService.update(+id, updateCotacaoDto);
  }
  @IsPublic()
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.cotacoesService.remove(+id);
  }
  @IsPublic()
  @Get('findByFornecedor/:id')
  async findManyByFornecedor(@Param('id') id: string) {
    return await this.cotacoesService.findManyByFornecedor(+id);
  }
  @IsPublic()
  @Get('findByInsumo/:id')
  async findManyByInsumo(@Param('id') id: string) {
    return await this.cotacoesService.findManyByInsumo(+id);
  }
}
