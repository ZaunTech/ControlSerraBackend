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
import { CotacoesService } from './cotacoes.service';
import { CreateCotacaoDto } from './dto/create-cotacao.dto';
import { UpdateCotacaoDto } from './dto/update-cotacao.dto';
import { ApiTags } from '@nestjs/swagger';
import { response as res } from "express";
@ApiTags('cotacoes')
@Controller('cotacoes')
export class CotacoesController {
  constructor(private readonly cotacoesService: CotacoesService) {}

  @Get('count')
  countAll() {
    return this.cotacoesService.countAllCotacaos();
  }

  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() createCotacaoDto: CreateCotacaoDto) {
    return this.cotacoesService.create(createCotacaoDto);
  }

  @Get()
  @Header('x-total-count','0')
  async findAll(@Query('page') page: number,@Query('perPage') perPage: number,@Res({ passthrough: true }) res) {
    page = page||1;
    perPage = perPage||10;
    const cotacoes = await this.cotacoesService.findAllWithPagination(
      page,
      Number(perPage)
    );
    const total = await this.cotacoesService.countAllCotacaos();
    res.header('x-total-count',total.toString())
    return {
      cotacoes,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.cotacoesService.findOne(+id);
  }

  @UsePipes(ValidationPipe)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCotacaoDto: UpdateCotacaoDto) {
    return this.cotacoesService.update(+id, updateCotacaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cotacoesService.remove(+id);
  }

  @Get('findByFornecedor/:id')
  async findManyByFornecedor(@Param('id') id: string) {
    return await this.cotacoesService.findManyByFornecedor(+id);
  }

  @Get('findByInsumo/:id')
  async findManyByInsumo(@Param('id') id: string) {
    return await this.cotacoesService.findManyByInsumo(+id);
  }
}
