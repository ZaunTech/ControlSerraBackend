import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  UsePipes,
  Query,
  Header,
  Res,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiTags } from '@nestjs/swagger';
import { response as res } from 'express';
@ApiTags('usuarios')
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get('count')
  countAll() {
    return this.usuariosService.countAll();
  }

  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }

  @Get()
  @Header('Access-Control-Allow-Origin', '*')
  @Header('Access-Control-Expose-Headers', 'X-Total-Count')
  async findAll(@Query('page') page: number,@Query('perPage') perPage: number,@Query('titulo_like') titulo_like : string, @Res({ passthrough: true }) res) {
    page = page||1;
    perPage = perPage|| await this.countAll();
    const usuarios = await this.usuariosService.findAllWithPagination(
      page,
      Number(perPage),
      titulo_like
    );
    const total = await this.usuariosService.countAll(); 
    res.header('x-total-count',total);
    return usuarios
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariosService.findOne(+id);
  }

  @UsePipes(ValidationPipe)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(+id, updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosService.remove(+id);
  }
}
