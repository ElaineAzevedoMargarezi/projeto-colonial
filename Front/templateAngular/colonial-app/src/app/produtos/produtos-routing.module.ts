import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutosFormComponent } from './produtos-form/produtos-form.component';
import { ProdutosListaComponent } from './produtos-lista/produtos-lista.component';


const routes: Routes = [
  {path: 'produtosForm', component: ProdutosFormComponent},
  {path: 'produtosForm/:id', component: ProdutosFormComponent},
  {path: 'produtosLista', component: ProdutosListaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
