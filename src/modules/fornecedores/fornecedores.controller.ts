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
  @Header('Access-Control-Allow-Origin', '*')
  @Header('Access-Control-Expose-Headers', 'X-Total-Count')
  async findAll(@Query('page') page: number,@Query('perPage') perPage: number,@Query('nome_like') nome_like : string, @Res({ passthrough: true }) res) {
    page = page||1;
    perPage = perPage||10;
    const fornecedores = await this.fornecedoresService.findAllWithPagination(
      page,
      Number(perPage),
      nome_like
    );
    const total = await this.fornecedoresService.countAllFornecedor(); 
    res.header('x-total-count',total);
    return fornecedores
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
