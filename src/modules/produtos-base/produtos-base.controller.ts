import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProdutosBaseService } from './produtos-base.service';
import { CreateProdutosBaseDto } from './dto/create-produtos-base.dto';
import { UpdateProdutosBaseDto } from './dto/update-produtos-base.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('produtos-base')
@Controller('produtos-base')
export class ProdutosBaseController {
  constructor(private readonly produtosBaseService: ProdutosBaseService) {}

  @Get('count')
  async countAll() {
    return await this.produtosBaseService.countAll();
  }

  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() createProdutosBaseDto: CreateProdutosBaseDto) {
    return await this.produtosBaseService.create(createProdutosBaseDto);
  }

  @Get()
  async findAll() {
    return await this.produtosBaseService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.produtosBaseService.findOne(+id);
  }
  @UsePipes(ValidationPipe)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProdutosBaseDto: UpdateProdutosBaseDto) {
    return await this.produtosBaseService.update(+id, updateProdutosBaseDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.produtosBaseService.remove(+id);
  }
}
