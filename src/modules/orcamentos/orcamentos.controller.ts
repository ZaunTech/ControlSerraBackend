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
  @Header('Access-Control-Allow-Origin', '*')
  @Header('Access-Control-Expose-Headers', 'X-Total-Count')
  async findAll(@Query('page') page: number,@Query('perPage') perPage: number,@Query('titulo_like') titulo_like : string, @Res({ passthrough: true }) res) {
    page = page||1;
    perPage = perPage|| await this.countAll();

    
    const orcamentos = await this.orcamentosService.findAllWithPagination(
      page,
      Number(perPage),
      titulo_like
    );
    const total = await this.orcamentosService.countAll(); 
    res.header('x-total-count',total);
    return orcamentos
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
