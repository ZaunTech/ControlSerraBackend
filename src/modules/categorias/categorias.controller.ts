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

  @Get('count')
  async countAll() {
    return await this.categoriasService.countAllCategorias();
  }
  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() createCategoriaDto: CreateCategoriaDto) {
    return await this.categoriasService.create(createCategoriaDto);
  }

  @Get()
  @Header('Access-Control-Allow-Origin', '*')
  @Header('Access-Control-Expose-Headers', 'X-Total-Count')
  async findAll(@Query('page') page: number,@Query('perPage') perPage: number,@Query('titulo_like') titulo_like : string, @Res({ passthrough: true }) res) {
    page = page || 1;
    perPage = perPage || await this.countAll();
    const categorias = await this.categoriasService.findAllWithPagination(
      page,
      Number(perPage),
      titulo_like
    );
    const total = await this.categoriasService.countAllCategorias(); 
    res.header('x-total-count',total);
    return await categorias
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.categoriasService.findOne(+id);
  }

  @Get(':busca')
  async findManyByTitle(@Param('busca') buscaParam: string) {
    return await this.categoriasService.findManyByTitle(buscaParam);
  }
  @UsePipes(ValidationPipe)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCategoriaDto: UpdateCategoriaDto,
  ) {
    return await this.categoriasService.update(+id, updateCategoriaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.categoriasService.remove(+id);
  }
}
