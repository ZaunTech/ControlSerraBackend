import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CotacoesService } from './cotacoes.service';
import { CreateCotacaoDto } from './dto/create-cotacao.dto';
import { UpdateCotacaoDto } from './dto/update-cotacao.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('cotacoes')
@Controller('cotacoes')
export class CotacoesController {
  constructor(private readonly cotacoesService: CotacoesService) {}

  @Get('count')
  countAll() {
    return this.cotacoesService.countAllCotacaos();
  }
  @Post()
  create(@Body() createCotacaoDto: CreateCotacaoDto) {
    return this.cotacoesService.create(createCotacaoDto);
  }

  @Get()
  findAll() {
    return this.cotacoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cotacoesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCotacaoDto: UpdateCotacaoDto) {
    return this.cotacoesService.update(+id, updateCotacaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cotacoesService.remove(+id);
  }
}
