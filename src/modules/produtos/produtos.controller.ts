import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  Query,
  Header,
  Res,
} from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { ApiTags } from '@nestjs/swagger';
import { addProdutoBaseDto } from './dto/addProdutoBase.dto';
@ApiTags('produtos')
@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Post('addProdutoBase')
  async createProdFromBase(@Body() addProdutoBaseDto: addProdutoBaseDto) {
     console.log(addProdutoBaseDto)
    return await this.produtosService.pullProdBase(addProdutoBaseDto);
  }

  @Get('count')
  async countAll(id:number) {
    return await this.produtosService.countAll(id);
  }

  
  @Post()
  async create(@Body() createProdutoDto: CreateProdutoDto) {
    
    return await this.produtosService.create(createProdutoDto);
  }

  @Get('prodOrc/:id')
  async findProdutoOrc(@Param('id') id: number) {
    return await this.produtosService.findProdutoOrc(+id);
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.produtosService.findOne(+id);
  }

  @Get(':busca')
  async findManyByTitle(@Param('titulo') buscaparam: string) {
    return await this.produtosService.findManyByTitle(buscaparam);
  }

  @Get(":id/produtos")
  @Header('Access-Control-Allow-Origin', '*')
  @Header('Access-Control-Expose-Headers', 'X-Total-Count')
  async findAll( @Param('id') id: number,@Query('page') page: number,@Query('perPage') perPage: number,@Query('titulo_like') titulo_like : string, @Res({ passthrough: true }) res) {
    page = page||1;
    perPage = perPage||await this.countAll(+id);
    const produtos = await this.produtosService.findAllWithPagination(
      +id,
      page,
      Number(perPage),
      titulo_like
    );
    const total = await this.produtosService.countAll(+id,titulo_like); 
    res.header('x-total-count',total);
    return await produtos
  }

 
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProdutoDto: UpdateProdutoDto) {
    console.log(updateProdutoDto)
    return await this.produtosService.update(+id, updateProdutoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.produtosService.remove(+id);
  }

 
}
