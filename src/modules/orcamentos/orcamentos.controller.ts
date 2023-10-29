
import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe,UsePipes, Query } from '@nestjs/common';
import { OrcamentosService } from './orcamentos.service';
import { CreateOrcamentoDto } from './dto/create-orcamento.dto';
import { UpdateOrcamentoDto } from './dto/update-orcamento.dto';
import { ApiTags } from '@nestjs/swagger';
import {response as res} from 'express';
@ApiTags('orcamentos')
@Controller('orcamentos')
export class OrcamentosController {
  constructor(private readonly orcamentosService: OrcamentosService) {}


  @Get('count')
  async countAll() {
    return await this.orcamentosService.countAll();
  }

  
  @Get('paginate')
  async findAllWithPagination(@Query('page') page: number, @Query('perPage') perPage: number) {
    page = page;
    perPage = perPage;
    const totalcount = await this.orcamentosService.countAll();
    res.set('x-total-count', totalcount.toString());
    return await this.orcamentosService.findAllWithPagination(page, perPage);
  }
  

  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() createOrcamentoDto: CreateOrcamentoDto) {
    return await this.orcamentosService.create(createOrcamentoDto);
  }

  @Get()
  async findAll() {
    return await this.orcamentosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.orcamentosService.findOne(+id);
  }

  @UsePipes(ValidationPipe)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateOrcamentoDto: UpdateOrcamentoDto) {
    return await this.orcamentosService.update(+id, updateOrcamentoDto);

  }
 
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.orcamentosService.remove(+id);
  }
}
