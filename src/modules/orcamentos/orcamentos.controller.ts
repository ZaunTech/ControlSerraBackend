import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe,UsePipes, Query, Res, Header } from '@nestjs/common';
import { OrcamentosService } from './orcamentos.service';
import { CreateOrcamentoDto } from './dto/create-orcamento.dto';
import { UpdateOrcamentoDto } from './dto/update-orcamento.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('orcamentos')
@Controller('orcamentos')
export class OrcamentosController {
  constructor(private readonly orcamentosService: OrcamentosService) {}

  @Get('count')
  async countAll() {
    return await this.orcamentosService.countAll();
  }
  
  @Get()
  async findAll(){
    return this.orcamentosService.findAll()
  }
  
  @Post()
  create(@Body() createOrcamentoDto: CreateOrcamentoDto) {
   
    return this.orcamentosService.create(createOrcamentoDto);
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orcamentosService.findOne(+id);
  }

  @UsePipes(ValidationPipe)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOrcamentoDto: UpdateOrcamentoDto,
  ) {
    return this.orcamentosService.update(+id, updateOrcamentoDto);
  }
 
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orcamentosService.remove(+id);
  }
}
