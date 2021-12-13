import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'
import { ProdutoresFormComponent } from './produtores/produtores-form/produtores-form.component';
import { ProdutoresModule } from './produtores/produtores.module';
import { ProdutoresService } from './produtores.service';
import { ProdutosModule } from './produtos/produtos.module';
import { ProdutoService } from './produto.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TemplateModule,
    ProdutoresModule,
    ProdutosModule
  ],
  providers: [
    ProdutoresService,
    ProdutoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
