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
} from '@nestjs/common';
import { InsumosService } from './insumos.service';
import { CreateInsumoDto } from './dto/create-insumo.dto';
import { UpdateInsumoDto } from './dto/update-insumo.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('insumos')
@Controller('insumos')
export class InsumosController {
  constructor(private readonly insumosService: InsumosService) {}

  @Get('count')
  countAll() {
    return this.insumosService.countAll();
  }

  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() createInsumoDto: CreateInsumoDto) {
    return this.insumosService.create(createInsumoDto);
  }

  @Get()
  findAll() {
    return this.insumosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.insumosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInsumoDto: UpdateInsumoDto) {
    return this.insumosService.update(+id, updateInsumoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.insumosService.remove(+id);
  }
}
