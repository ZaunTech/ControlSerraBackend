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
import { InsumosService } from './insumos.service';
import { CreateInsumoDto } from './dto/create-insumo.dto';
import { UpdateInsumoDto } from './dto/update-insumo.dto';
import { ApiTags } from '@nestjs/swagger';
import { response as res } from "express";
import { IsPublic } from '../auth/decorators/is-public.decorator';
@ApiTags('insumos')
@Controller('insumos')
export class InsumosController {
  constructor(private readonly insumosService: InsumosService) {}

  @Get('count')
  async countAll() {
    return await this.insumosService.countAll();
  }
  @IsPublic()
  @UsePipes(ValidationPipe)
  @Post()
   async create(@Body() createInsumoDto: CreateInsumoDto) {
    return await this.insumosService.create(createInsumoDto);
  }
  @IsPublic()
  @Get()
  async findAll() {
    return await this.insumosService.findAll();
  }
  @IsPublic()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.insumosService.findOne(+id);
  }
  @IsPublic()
  @UsePipes(ValidationPipe)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateInsumoDto: UpdateInsumoDto) {
    return await this.insumosService.update(+id, updateInsumoDto);
  }
  @IsPublic()
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.insumosService.remove(+id);
  }
}
