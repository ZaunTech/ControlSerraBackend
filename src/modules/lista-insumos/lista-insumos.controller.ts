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

  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() createListaInsumoDto: CreateListaInsumoDto) {
    return this.listaInsumosService.create(createListaInsumoDto);
  }

  @Get()
  async findAll(){
    return this.listaInsumosService.findAll()
  }

  @Get('produtos/:id')
  async findProdutoOrc(@Param('id') id: number) {
    return await this.listaInsumosService.findInsumoProd(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(this.listaInsumosService.findOne(+id))
    return this.listaInsumosService.findOne(+id);
  }

  @UsePipes(ValidationPipe)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateListaInsumoDto: UpdateListaInsumoDto,
  ) {
    return this.listaInsumosService.update(+id, updateListaInsumoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.listaInsumosService.remove(+id);
  }

  @Post(':id/cotar')
  @ApiBody({})
  selectCotacao(@Param('id') idItemListaInsumo: number, @Body() body) {
    return this.listaInsumosService.selectCotacao(+idItemListaInsumo, +body.idCotacao);
  }
}
