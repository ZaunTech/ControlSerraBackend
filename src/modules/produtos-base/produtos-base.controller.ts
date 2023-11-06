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
import { ProdutosBaseService } from './produtos-base.service';
import { CreateProdutosBaseDto } from './dto/create-produtos-base.dto';
import { UpdateProdutosBaseDto } from './dto/update-produtos-base.dto';
import { ApiTags } from '@nestjs/swagger';
import { response as res } from 'express';
@ApiTags('produtos-base')
@Controller('produtos-base')
export class ProdutosBaseController {
  constructor(private readonly produtosBaseService: ProdutosBaseService) {}


  @Get('count')
  countAll() {
    return this.produtosBaseService.countAll();
  }

  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() createProdutosBaseDto: CreateProdutosBaseDto) {
    return this.produtosBaseService.create(createProdutosBaseDto);
  }

  @Get()
  @Header('Access-Control-Allow-Origin', '*')
  @Header('Access-Control-Expose-Headers', 'X-Total-Count')
  async findAll(@Query('page') page: number,@Query('perPage') perPage: number,@Query('titulo_like') titulo_like : string, @Res({ passthrough: true }) res) {
    page = page||1;
    perPage = perPage||await this.countAll();
    const produtos = await this.produtosBaseService.findAllWithPagination(
      page,
      Number(perPage),
      titulo_like
    );
    const total = await this.produtosBaseService.countAll(); 
    res.header('x-total-count',total);
    return produtos
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produtosBaseService.findOne(+id);
  }
  
  @UsePipes(ValidationPipe)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProdutosBaseDto: UpdateProdutosBaseDto,
  ) {
    return this.produtosBaseService.update(+id, updateProdutosBaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.produtosBaseService.remove(+id);
  }
}
