import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  Query,
  Header,
  Res,
} from '@nestjs/common';

import { CategoriasService } from './categorias.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('categorias')
@Controller('categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  totalcount =  this.categoriasService.countAllCategorias();

  @Get('count')
  countAll() {
    return this.categoriasService.countAllCategorias();
  }
  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() createCategoriaDto: CreateCategoriaDto) {
    return this.categoriasService.create(createCategoriaDto);
  }

  @Get()
  @Header('x-total-count','0')
  async findAll(@Query('page') page: number,@Query('perPage') perPage: number,@Res({ passthrough: true }) res) {
    page = page||1;
    perPage = perPage||10;
    const categorias = await this.categoriasService.findAllWithPagination(
      page,
      Number(perPage)
    );
    const total = await this.categoriasService.countAllCategorias();
    res.header('x-total-count',total.toString())
    return {
      categorias,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.categoriasService.findOne(+id);
  }

  @Get(':busca')
  findManyByTitle(@Param('busca') buscaParam: string) {
    return this.categoriasService.findManyByTitle(buscaParam);
  }
  @UsePipes(ValidationPipe)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoriaDto: UpdateCategoriaDto,
  ) {
    return this.categoriasService.update(+id, updateCategoriaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriasService.remove(+id);
  }
}
