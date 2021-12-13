import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProdutoService } from 'src/app/produto.service';
import { ProdutoresService } from 'src/app/produtores.service';
import { Produtores } from 'src/app/produtores/produtores';
import { Produto } from '../produto';

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.css']
})
export class ProdutosFormComponent implements OnInit {

  produtores: Produtores[]=[];
  produto: Produto;
  sucesso: boolean = false;
  errosApi: String[];
  id : number;


  constructor(private servicoProdutores: ProdutoresService,
              private servicoProduto: ProdutoService,
              private activatedRoute : ActivatedRoute) {
      this.produto = new Produto;
   }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params;
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.servicoProduto
            .getProdutoById(this.id)
            .subscribe(resposta => this.produto = resposta,
                      erroResposta => this.produto = new Produto());
      }
    })
    
    this.servicoProdutores
        .getProdutores()
        .subscribe(
          respostaSucesso => this.produtores = respostaSucesso);
  }

  onSubmit(){
    if (this.id) {
      this.servicoProduto
        .atualizar(this.produto)
        .subscribe(respostaSucesso => {
          this.sucesso = true;
          this.errosApi = null;
        }), respostaErro => {
          this.errosApi = respostaErro.error.erros;
          console.log(respostaErro);
        }
    }else{
      this.servicoProduto
        .salvar(this.produto)
        .subscribe(respostaSucesso =>{
          this.sucesso = true;
          this.errosApi = null;
          this.produto = new Produto();
        }, respostaErro =>{
          this.errosApi = respostaErro.error.erros;
          this.sucesso = false;
        })
    }
    
  }
}
