import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/produto.service';
import { Produto } from '../produto';
import { ListaProdutos } from './ListaProdutos';

@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.css']
})
export class ProdutosListaComponent implements OnInit {


  nome: string;
  lista: ListaProdutos[];
  menssage: String;
  produtoSelecionado: Produto;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(private servicoDeProduto: ProdutoService) { }

  ngOnInit(): void {
  }
  
  consultar(){
    this.menssage = null
    this.servicoDeProduto
        .busca(this.nome)
        .subscribe(respostaSucesso=>{
          this.lista = respostaSucesso;
          if (this.lista.length <= 0) {
            this.menssage = "Nenhum registro encontrado."
          }
        })
  }
  
  preparaDelecao(produto: Produto){
    this.produtoSelecionado = produto;
  }

  deletarExame(){
    this
      .servicoDeProduto
      .deletar(this.produtoSelecionado)
      .subscribe(
        respostaSucesso => {
          this.mensagemSucesso = 'Exame deletado com sucesso!';
          this.mensagemErro = null;
          this.consultar();
        },
        respostaErro => {
          this.mensagemSucesso = 'Ocorreu um erro ao deletar o exame!!'
          this.mensagemErro = null;
        }
      )
  }
}

