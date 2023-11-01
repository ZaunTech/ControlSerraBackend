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
  countAll(){
    return this.clientesService.countAllCliente();
  }

  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.clientesService.create(createClienteDto);
  }

  @Get()
  @Header('x-total-count','0')
  async findAll(@Query('page') page: number,@Query('perPage') perPage: number,@Res({ passthrough: true }) res) {
    page = page||1;
    perPage = perPage||10;
    const clientes = await this.clientesService.findAllWithPagination(
      page,
      Number(perPage)
    );
    const total = await this.clientesService.countAllCliente();
    res.header('x-total-count',total.toString())
    return {
      clientes,
    };
  }

  
  @Get('buscar/:termo')
  async buscarCliente(@Param('termo') termo: string) {
    return this.clientesService.findManyCliente(termo);
  }

  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientesService.findOne(+id);
  }

  @UsePipes(ValidationPipe)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {
    return this.clientesService.update(+id, updateClienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientesService.remove(+id);
  }
}
