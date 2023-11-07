import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UsePipes, ValidationPipe, Header, Res } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { ApiTags } from '@nestjs/swagger';
import { response as res } from 'express';
@ApiTags('clientes')
@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}



  @Get('count')
  async countAll(){
    return await this.clientesService.countAllCliente();
  }

  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() createClienteDto: CreateClienteDto) {
    return await this.clientesService.create(createClienteDto);
  }
  @Get()
  @Header('Access-Control-Allow-Origin', '*')
  @Header('Access-Control-Expose-Headers', 'X-Total-Count')
  async findAll(@Query('page') page: number,@Query('perPage') perPage: number,@Query('nome_like') nome_like : string, @Res({ passthrough: true }) res) {
    page = page||1;
    perPage = perPage||await this.countAll();
    const clientes = await this.clientesService.findAllWithPagination(
      page,
      Number(perPage),
      nome_like
    );
    const total = await this.clientesService.countAllCliente(); 
    res.header('x-total-count',total);
    return await clientes
  }

  
  @Get('buscar/:termo')
  async buscarCliente(@Param('termo') termo: string) {
    return await this.clientesService.findManyCliente(termo);
  }

  
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.clientesService.findOne(+id);
  }

  @UsePipes(ValidationPipe)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {
    return await this.clientesService.update(+id, updateClienteDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.clientesService.remove(+id);
  }
}
