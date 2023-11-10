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
  create(@Body() createVarianteDto: CreateVarianteDto) {
    return this.variantesService.create(createVarianteDto);
  }

  @Get()
  @Header('Access-Control-Allow-Origin', '*')
  @Header('Access-Control-Expose-Headers', 'X-Total-Count')
  async findAll(
    @Param('idInsumo') idInsumo: number,
    @Query('page') page: number,
    @Query('perPage') perPage: number,
    @Query('titulo_like') titulo_like: string,
    @Res({ passthrough: true }) res,
  ) {
    page = page || 1;
    perPage = perPage || (await this.countAll());
    const variantes = await this.variantesService.findAll(
      +idInsumo,
      page,
      Number(perPage),
      titulo_like,
    );
    const total = await this.variantesService.countAll();
    res.header('x-total-count', total);
    return await variantes;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.variantesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVarianteDto: UpdateVarianteDto,
  ) {
    return this.variantesService.update(+id, updateVarianteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.variantesService.remove(+id);
  }
}
