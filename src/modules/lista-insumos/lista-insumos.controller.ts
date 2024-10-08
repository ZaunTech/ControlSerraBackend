import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  UsePipes,
  Query,
  Header,
  Res,
} from '@nestjs/common';
import { ListaInsumosService } from './lista-insumos.service';
import { CreateListaInsumoDto } from './dto/create-lista-insumo.dto';
import { UpdateListaInsumoDto } from './dto/update-lista-insumo.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('lista-insumos')
@Controller('lista-insumos')
export class ListaInsumosController {
  constructor(private readonly listaInsumosService: ListaInsumosService) {}

  
  @Post()
  async create(@Body() createListaInsumoDto: CreateListaInsumoDto) {
    return await this.listaInsumosService.create(createListaInsumoDto);
  }

  @Get('produtos/:id')
  @Header('Access-Control-Allow-Origin', '*')
  @Header('Access-Control-Expose-Headers', 'X-Total-Count')
  async findProdutoOrc(
    @Param('id') id: number,
    @Query('page') page: number,
    @Query('perPage') perPage: number,
    @Query('titulo_like') titulo_like: string,
    @Res({ passthrough: true }) res,
  ) {
    
    page = page || 1;
    perPage = perPage || 5;

    const listasinsumos = await this.listaInsumosService.findAllWithPagination(
      +id,
      page,
      Number(perPage),
      titulo_like,
    );
    const total = await this.listaInsumosService.countAll(+id,titulo_like);
    res.header('x-total-count', total);
    return await listasinsumos;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.listaInsumosService.findOne(+id);
  }

  
  @Patch(':id')
   async update(
    @Param('id') id: string,
    @Body() updateListaInsumoDto: UpdateListaInsumoDto,
  ) {
    return await this.listaInsumosService.update(+id, updateListaInsumoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.listaInsumosService.remove(+id);
  }

  @Post(':id/cotar')
  @ApiBody({})
  async selectCotacao(@Param('id') idItemListaInsumo: number, @Body() body) {
    return await this.listaInsumosService.selectCotacao(
      +idItemListaInsumo,
      +body.idCotacao,
    );
  }
}
