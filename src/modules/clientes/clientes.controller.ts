import { Controller, Get, Post, Body, Patch, Param, Delete,UsePipes, ValidationPipe, Query } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { ApiTags } from '@nestjs/swagger';
import { response as res } from 'express';
@ApiTags('clientes')
@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

@Get('paginate')
async findAllWithPagination(@Query('page') page: number, @Query('perPage') perPage: number) {
  page = page;
  perPage = perPage;
  const totalcount = await this.clientesService.countAllCliente();

  res.set('x-total-count', totalcount.toString());
  return await this.clientesService.findAllWithPagination(page, perPage);
}

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
