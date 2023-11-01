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
import { CotacoesService } from './cotacoes.service';
import { CreateCotacaoDto } from './dto/create-cotacao.dto';
import { UpdateCotacaoDto } from './dto/update-cotacao.dto';
import { ApiTags } from '@nestjs/swagger';
import { response as res } from "express";
import { recotarDto } from './dto/recotar.dto';
@ApiTags('cotacoes')
@Controller('cotacoes')
export class CotacoesController {
  constructor(private readonly cotacoesService: CotacoesService) { }

  @Post('recotar/:id')
  async recotar(@Param('id') idCotacao: string, @Body() recotarDto: recotarDto) {
    return await this.cotacoesService.recotar(+idCotacao, recotarDto);
  }

  @Get('paginate')
  async findAllWithPagination(@Query('page') page: number, @Query('perPage') perPage: number) {
    page = page;
    perPage = perPage;
    const totalcount = await this.cotacoesService.countAllCotacaos();

    res.set('x-total-count', totalcount.toString());
    return await this.cotacoesService.findAllWithPagination(page, perPage);
  }
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
  findAll() {
    return this.cotacoesService.findAll();
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
