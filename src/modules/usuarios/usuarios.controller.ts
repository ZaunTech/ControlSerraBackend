import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe,UsePipes, Query } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiTags } from '@nestjs/swagger';
import { IsPublic } from '../auth/decorators/is-public.decorator';
import { response as res } from "express";

@ApiTags('usuarios')
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get('paginate')
  async findAllWithPagination(@Query('page') page: number, @Query('perPage') perPage: number) {
    page = page;
    perPage = perPage;
    const totalcount = await this.usuariosService.countAll();
    res.set('x-total-count', totalcount.toString());
    return await this.usuariosService.findAllWithPagination(page, perPage);
  }

  @IsPublic()
  @Get('count')
  async countAll() {
    return await this.usuariosService.countAll();
  }

  @UsePipes(ValidationPipe)
  @IsPublic()
  @Post()
  async create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return await this.usuariosService.create(createUsuarioDto);
  }
  @IsPublic()
  @Get()
  async findAll() {
    return await this.usuariosService.findAll();
  }
  @IsPublic()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.usuariosService.findOne(+id);
  }
  @IsPublic()
  @UsePipes(ValidationPipe)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return await this.usuariosService.update(+id, updateUsuarioDto);
  }
  @IsPublic()
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.usuariosService.remove(+id);
  }
}
