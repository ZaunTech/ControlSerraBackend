import { Controller, Get, Post, Body, Patch, Param, Delete,UsePipes, ValidationPipe, Query } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { ApiTags } from '@nestjs/swagger';
import { response as res } from 'express';
import { IsPublic } from '../auth/decorators/is-public.decorator';
@ApiTags('clientes')
@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Get('count')
  async countAll(){
    return await this.clientesService.countAllCliente();
  }
  @IsPublic()
  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() createClienteDto: CreateClienteDto) {
    return await this.clientesService.create(createClienteDto);
  }
  @IsPublic()
  @Get()
  async findAll() {
    return await this.clientesService.findAll();
  }

  
  @Get('buscar/:termo')
  async buscarCliente(@Param('termo') termo: string) {
    return await this.clientesService.findManyCliente(termo);
  }

  
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.clientesService.findOne(+id);
  }

  @IsPublic()
  @UsePipes(ValidationPipe)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {
    return await this.clientesService.update(+id, updateClienteDto);
  }
  @IsPublic()
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.clientesService.remove(+id);
  }
}
