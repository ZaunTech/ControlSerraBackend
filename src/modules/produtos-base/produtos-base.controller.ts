import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdutosBaseService } from './produtos-base.service';
import { CreateProdutosBaseDto } from './dto/create-produtos-base.dto';
import { UpdateProdutosBaseDto } from './dto/update-produtos-base.dto';

@Controller('produtos-base')
export class ProdutosBaseController {
  constructor(private readonly produtosBaseService: ProdutosBaseService) {}

  @Get('count')
  countAll() {
    return this.produtosBaseService.countAll();
  }

  @Post()
  create(@Body() createProdutosBaseDto: CreateProdutosBaseDto) {
    return this.produtosBaseService.create(createProdutosBaseDto);
  }

  @Get()
  findAll() {
    return this.produtosBaseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produtosBaseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProdutosBaseDto: UpdateProdutosBaseDto) {
    return this.produtosBaseService.update(+id, updateProdutosBaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.produtosBaseService.remove(+id);
  }
}
