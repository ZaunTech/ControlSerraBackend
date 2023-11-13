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
  Res,
  Header,
  Request,
} from '@nestjs/common';
import { OrcamentosService } from './orcamentos.service';
import { CreateOrcamentoDto } from './dto/create-orcamento.dto';
import { UpdateOrcamentoDto } from './dto/update-orcamento.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthRequest } from 'src/auth/models/AuthRequest';
import { Usuario } from '../usuarios/entities/usuario.entity';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';

@ApiTags('orcamentos')
@Controller('orcamentos')
export class OrcamentosController {
  constructor(private readonly orcamentosService: OrcamentosService) {}

  @Get('count')
  async countAll() {
    return await this.orcamentosService.countAll();
  }

  @Get()
  @Header('Access-Control-Allow-Origin', '*')
  @Header('Access-Control-Expose-Headers', 'X-Total-Count')
  async findAll(
    @Query('page') page: number,
    @Query('perPage') perPage: number,
    @Query('titulo_like') titulo_like: string,
    @Res({ passthrough: true }) res,
  ) {
    page = page || 1;
    perPage = perPage || (await this.countAll());

    const orcamentos = await this.orcamentosService.findAllWithPagination(
      page,
      Number(perPage),
      titulo_like,
    );
    const total = orcamentos.length;
    res.header('x-total-count', total);
    return await orcamentos;
  }

  @Post()
  async create(
    @CurrentUser() usuario: Usuario,
    @Body() createOrcamentoDto: CreateOrcamentoDto,
  ) {
    return await this.orcamentosService.create(createOrcamentoDto, usuario);
  }

  @Get('full/:id')
  async findOneFull(@Param('id') id: string) {
    return await this.orcamentosService.findOneFull(+id);
  }
  @Get('concluded')
  async findAllconcluded() {
    return await this.orcamentosService.findAllconcluded();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.orcamentosService.findOne(+id);
  }

  
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateOrcamentoDto: UpdateOrcamentoDto,
  ) {
    return await this.orcamentosService.update(+id, updateOrcamentoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.orcamentosService.remove(+id);
  }
}
