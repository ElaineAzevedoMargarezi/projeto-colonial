import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoresService } from 'src/app/produtores.service';
import { Produtores } from '../produtores';

@Component({
  selector: 'app-produtores-lista',
  templateUrl: './produtores-lista.component.html',
  styleUrls: ['./produtores-lista.component.css']
})
export class ProdutoresListaComponent implements OnInit {

  produtores: Produtores[] = []
  produtorSelecionado: Produtores;
  menssagemSucesso: string;
  menssagemErro: string;

  constructor(private service: ProdutoresService,
              private router: Router) { }

  ngOnInit(): void {
    this.service
        .getProdutores()
        .subscribe(resposta => this.produtores = resposta);
  }

  novoCadastro(){
    this.router.navigate(['/produtoresForm'])
  }

  preparaDelecao(produtor: Produtores){
    this.produtorSelecionado = produtor;
  }

  deletarProdutor(){
    this
      .service
      .deletar(this.produtorSelecionado)
      .subscribe(
        respostaSucesso=> {
          this.menssagemSucesso = 'Produtoe deletado som sucesso!';
          this.menssagemErro = null;
          this.ngOnInit();
        },
        respostaErro => {
          this.menssagemSucesso = null;
          this.menssagemErro = 'Ocorreu um erro ao deletar este produtor';
        }
      )
  }
}
