import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProdutosFormComponent } from './produtos-form/produtos-form.component';
import { ProdutosListaComponent } from './produtos-lista/produtos-lista.component';


@NgModule({
  declarations: [ProdutosFormComponent, ProdutosListaComponent],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule,
    RouterModule
  ], exports: [
    ProdutosFormComponent,
    ProdutosListaComponent
  ]
})
export class ProdutosModule { }
