import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoresFormComponent } from './produtores-form/produtores-form.component';
import { ProdutoresListaComponent } from './produtores-lista/produtores-lista.component';


const routes: Routes = [
  {path: 'produtoresForm', component: ProdutoresFormComponent},
  {path: 'produtoresForm/:id', component: ProdutoresFormComponent},
  {path: 'produtoresLista', component: ProdutoresListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoresRoutingModule { }
