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
} from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { ApiTags } from '@nestjs/swagger';
import { response as res } from 'express';
import { IsPublic } from '../auth/decorators/is-public.decorator';
@ApiTags('pedidos')
@Controller('pedidos')
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

  @IsPublic()
  @UsePipes(ValidationPipe)
  @Get('count')
  async countAll() {
    return await this.pedidosService.countAll();
  }

  @IsPublic()
  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() createPedidoDto: CreatePedidoDto) {
    return await this.pedidosService.create(createPedidoDto);
  }
  @IsPublic()
  @Get(':busca')
  async findManyByTitle(@Param('busca') buscaParam: number) {
    return await this.pedidosService.findManyByPagamento(buscaParam);
  }

  @IsPublic()
  @Get()
  async findAll() {
    return await this.pedidosService.findAll();
  }
  @IsPublic()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.pedidosService.findOne(+id);
  }
  @IsPublic()
  @UsePipes(ValidationPipe)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePedidoDto: UpdatePedidoDto) {
    return await this.pedidosService.update(+id, updatePedidoDto);
  }
  @IsPublic()
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.pedidosService.remove(+id);
  }
}
