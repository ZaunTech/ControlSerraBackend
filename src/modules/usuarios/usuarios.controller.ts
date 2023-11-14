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
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { Usuario } from './entities/usuario.entity';
import { ChangePasswordDto } from './dto/changePassword.dto';

@ApiTags('usuarios')
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get('count')
  async countAll() {
    return await this.usuariosService.countAll();
  }

  @Post()
  async create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return await this.usuariosService.create(createUsuarioDto);
  }

  @Post(':id')
  async changePassword(
    @Param('id') id: string,
    @Body() changePassword: ChangePasswordDto,
  ) {
    return await this.usuariosService.changePassword(+id, changePassword);
  }

  @Get()
  @Header('Access-Control-Allow-Origin', '*')
  @Header('Access-Control-Expose-Headers', 'X-Total-Count')
  async findAll(
    @CurrentUser() usuario: Usuario,
    @Query('page') page: number,
    @Query('perPage') perPage: number,
    @Query('titulo_like') titulo_like: string,
    @Res({ passthrough: true }) res,
  ) {
    if (usuario.tipoUsuario !== 'Administrador') {
      return await this.usuariosService.findManyByEmail(usuario.email);
    }
    page = page || 1;
    perPage = perPage || (await this.countAll());
    const usuarios = await this.usuariosService.findAllWithPagination(
      page,
      Number(perPage),
      titulo_like,
    );
    const total = await this.usuariosService.countAll();
    res.header('x-total-count', total);
    return await usuarios;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.usuariosService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUsuarioDto: UpdateUsuarioDto,
  ) {
    return await this.usuariosService.update(+id, updateUsuarioDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.usuariosService.remove(+id);
  }
}
