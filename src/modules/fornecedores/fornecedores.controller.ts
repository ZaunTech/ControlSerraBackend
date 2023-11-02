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
  Header,
  Res,
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

  @Get('count')
  countAll() {
    return this.fornecedoresService.countAllFornecedor();
  }

  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() CreateFornecedoresDto: CreateFornecedorDto) {
    return this.fornecedoresService.create(CreateFornecedoresDto);
  }

  @Get()
  async findAll(){
    return this.fornecedoresService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.fornecedoresService.findOne(+id);
  }
  
  @UsePipes(ValidationPipe)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() UpdateFornecedoresDto: UpdateFornecedorDto,
  ) {
    return this.fornecedoresService.update(+id, UpdateFornecedoresDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fornecedoresService.remove(+id);
  }
}
