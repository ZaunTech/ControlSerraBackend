import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Header,
  Res,
} from '@nestjs/common';
import { VariantesService } from './variantes.service';
import { CreateVarianteDto } from './dto/create-variante.dto';
import { UpdateVarianteDto } from './dto/update-variante.dto';

@Controller('variantes')
export class VariantesController {
  constructor(private readonly variantesService: VariantesService) {}

  @Get('count')
  async countAll() {
    return await this.variantesService.countAll();
  }

  @Post()
  async create(@Body() createVarianteDto: CreateVarianteDto) {
   
    return await this.variantesService.create(createVarianteDto);
  }

  @Get()
  @Header('Access-Control-Allow-Origin', '*')
  @Header('Access-Control-Expose-Headers', 'X-Total-Count')
  async findAll(
    @Query('page') page: number,
    @Query('perPage') perPage: number,
    @Query('titulo_like') titulo_like: string,
    @Res({ passthrough: true }) res,
  ) {
    page = page || 1;
    perPage = perPage || (await this.countAll());
    const variantes = await this.variantesService.findAll();
    const total = await this.variantesService.countAll();
    res.header('x-total-count', total);
    return await variantes;
  }

  @Get('insumo/:idInsumo')
  @Header('Access-Control-Allow-Origin', '*')
  @Header('Access-Control-Expose-Headers', 'X-Total-Count')
  async findAllWithId(
    @Param('idInsumo') idInsumo: string,
    @Query('page') page: number,
    @Query('perPage') perPage: number,
    @Query('titulo_like') titulo_like: string,
    @Res({ passthrough: true }) res,
  ) {
    
    page = page || 1;
    perPage = perPage || (await this.countAll());
    const variantes = await this.variantesService.findAllWithId(
      +idInsumo,
      page,
      Number(perPage),
      titulo_like,
    );
    const total = await this.variantesService.countAllById(+idInsumo);
    res.header('x-total-count', total);
    return await variantes;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.variantesService.findOne(+id);

  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateVarianteDto: UpdateVarianteDto,
  ) {
    return await this.variantesService.update(+id, updateVarianteDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.variantesService.remove(+id);
  }
}
