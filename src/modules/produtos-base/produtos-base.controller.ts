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
} from '@nestjs/common';
import { ProdutosBaseService } from './produtos-base.service';
import { CreateProdutosBaseDto } from './dto/create-produtos-base.dto';
import { UpdateProdutosBaseDto } from './dto/update-produtos-base.dto';
import { ApiTags } from '@nestjs/swagger';
import { response as res } from 'express';
import { IsPublic } from '../auth/decorators/is-public.decorator';
@ApiTags('produtos-base')
@Controller('produtos-base')
export class ProdutosBaseController {
  constructor(private readonly produtosBaseService: ProdutosBaseService) {}

  @IsPublic()
  @Get('count')
  async countAll() {
    return await this.produtosBaseService.countAll();
  }
  @IsPublic()
  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() createProdutosBaseDto: CreateProdutosBaseDto) {
    return await this.produtosBaseService.create(createProdutosBaseDto);
  }
  @IsPublic()
  @Get()
  async findAll() {
    return await this.produtosBaseService.findAll();
  }
  @IsPublic()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.produtosBaseService.findOne(+id);
  }
  @IsPublic()
  @UsePipes(ValidationPipe)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProdutosBaseDto: UpdateProdutosBaseDto) {
    return await this.produtosBaseService.update(+id, updateProdutosBaseDto);
  }
  @IsPublic()
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.produtosBaseService.remove(+id);
  }
}
