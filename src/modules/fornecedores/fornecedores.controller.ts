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
  ValidationPipe,
} from '@nestjs/common';
import { FornecedoresService } from './fornecedores.service';
import { CreateFornecedorDto } from './dto/create-fornecedor.dto';
import { UpdateFornecedorDto } from './dto/update-fornecedor.dto';
import { ApiTags } from '@nestjs/swagger';
import { response as res } from "express";
@ApiTags('fornecedores')
@Controller('fornecedores')
export class FornecedoresController {
  constructor(private readonly fornecedoresService: FornecedoresService) {}

  @Get('paginate')
async findAllWithPagination(@Query('page') page: number, @Query('perPage') perPage: number) {
  page = page;
  perPage = perPage;
  const totalcount = await this.fornecedoresService.countAllFornecedor();
  res.set('x-total-count', totalcount.toString());
  return await this.fornecedoresService.findAllWithPagination(page, perPage);
}
  @Get('count')
  async countAll(){
    return await this.fornecedoresService.countAllFornecedor();
  }

  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() CreateFornecedoresDto: CreateFornecedorDto) {
    return await this.fornecedoresService.create(CreateFornecedoresDto);
  }

  @Get()
  async findAll() {
    return await this.fornecedoresService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.fornecedoresService.findOne(+id);
  }

  @UsePipes(ValidationPipe)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() UpdateFornecedoresDto: UpdateFornecedorDto) {
    return await this.fornecedoresService.update(+id, UpdateFornecedoresDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.fornecedoresService.remove(+id);
  }
}
