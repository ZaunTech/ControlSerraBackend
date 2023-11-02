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

  @Get('paginate')
  async findAllWithPagination(
    @Query('page') page: number,
    @Query('perPage') perPage: number,
  ) {
    page = page;
    perPage = perPage;
    const totalcount = await this.produtosBaseService.countAll();
    res.set('x-total-count', totalcount.toString());
    return await this.produtosBaseService.findAllWithPagination(page, perPage);
  }
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
  @Header('x-total-count','0')
  async findAll(@Query('page') page: number,@Query('perPage') perPage: number,@Res({ passthrough: true }) res) {
    page = page||1;
    perPage = perPage||10;
    const produtosBase = await this.produtosBaseService.findAllWithPagination(
      page,
      Number(perPage)
    );
    const total = await this.produtosBaseService.countAll();
    res.header('x-total-count',total.toString())
    return {
      produtosBase,
    };
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
