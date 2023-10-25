import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InsumosModule } from './modules/insumos/insumos.module';
import { CategoriasModule } from './modules/categorias/categorias.module';
import { FornecedoresModule } from './modules/fornecedores/fornecedores.module';
import { ClientesModule } from './modules/clientes/clientes.module';
import { OrcamentosModule } from './modules/orcamentos/orcamentos.module';
import { PedidosModule } from './modules/pedidos/pedidos.module';
import { ProdutosModule } from './modules/produtos/produtos.module';
import { CotacoesModule } from './modules/cotacoes/cotacoes.module';
import { ListaInsumosModule } from './modules/lista-insumos/lista-insumos.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { ProdutosBaseModule } from './modules/produtos-base/produtos-base.module';
import { InsumosProdutosBaseModule } from './modules/insumos-produtos-base/insumos-produtos-base.module';

@Module({
  imports: [
    InsumosModule,
    CategoriasModule,
    FornecedoresModule,
    ClientesModule,
    OrcamentosModule,
    PedidosModule,
    ProdutosModule,
    CotacoesModule,
    ListaInsumosModule,
    UsuariosModule,
    ProdutosBaseModule,
    InsumosProdutosBaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
