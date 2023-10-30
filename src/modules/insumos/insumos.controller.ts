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
@ApiTags('insumos')
@Controller('insumos')
export class InsumosController {
  constructor(private readonly insumosService: InsumosService) {}

  @Get('paginate')
async findAllWithPagination(@Query('page') page: number, @Query('perPage') perPage: number) {
  page = page;
  perPage = perPage;
  const totalcount = await this.insumosService.countAll();
  res.set('x-total-count', totalcount.toString());
  return await this.insumosService.findAllWithPagination(page, perPage);
}

  @Get('count')
  async countAll() {
    return await this.insumosService.countAll();
  }

  @UsePipes(ValidationPipe)
  @Post()
   async create(@Body() createInsumoDto: CreateInsumoDto) {
    return await this.insumosService.create(createInsumoDto);
  }

  @Get()
  async findAll() {
    return await this.insumosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.insumosService.findOne(+id);
  }

  @UsePipes(ValidationPipe)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateInsumoDto: UpdateInsumoDto) {
    return await this.insumosService.update(+id, updateInsumoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.insumosService.remove(+id);
  }
}
