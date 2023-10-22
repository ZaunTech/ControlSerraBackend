import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CotacaosService } from './cotacaos.service';
import { CreateCotacaoDto } from './dto/create-cotacao.dto';
import { UpdateCotacaoDto } from './dto/update-cotacao.dto';

@Controller('cotacoes')
export class CotacaosController {
  constructor(private readonly cotacaosService: CotacaosService) {}
  
  @Get('count')
  countAll(){
    return this.cotacaosService.countAllCotacaos();
  }
  @Post()
  create(@Body() createCotacaoDto: CreateCotacaoDto) {
    return this.cotacaosService.create(createCotacaoDto);
  }

  @Get()
  findAll() {
    return this.cotacaosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cotacaosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCotacaoDto: UpdateCotacaoDto) {
    return this.cotacaosService.update(+id, updateCotacaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cotacaosService.remove(+id);
  }
}
