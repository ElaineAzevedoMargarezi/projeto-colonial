import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoresRoutingModule } from './produtores-routing.module';
import { ProdutoresFormComponent } from './produtores-form/produtores-form.component';
import { FormsModule } from '@angular/forms';
import { ProdutoresListaComponent } from './produtores-lista/produtores-lista.component';


@NgModule({
  declarations: [ProdutoresFormComponent, ProdutoresListaComponent],
  imports: [
    CommonModule,
    ProdutoresRoutingModule,
    FormsModule
  ], exports: [
    ProdutoresFormComponent,
    ProdutoresListaComponent
  ]
})
export class ProdutoresModule { }
