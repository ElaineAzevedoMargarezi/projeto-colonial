import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProdutoresService } from 'src/app/produtores.service';
import { Produtores } from '../produtores';

@Component({
  selector: 'app-produtores-form',
  templateUrl: './produtores-form.component.html',
  styleUrls: ['./produtores-form.component.css']
})
export class ProdutoresFormComponent implements OnInit {

  produtores: Produtores
  sucesso: boolean = false;
  errosApi: String[];
  id : number;

  constructor(private service : ProdutoresService,
              private router: Router,
              private activatedRoute : ActivatedRoute) { 
      this.produtores = new Produtores();
   }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params;

    params
      .subscribe(urlParams => {
            this.id = urlParams['id'];
            if (this.id){
                this.service
                    .getPrudutorById(this.id)
                    .subscribe(respostaSucesso => {
                        this.produtores = respostaSucesso;
                    }, respostaComErro => {
                        this.produtores = new Produtores();
                    })
            }
      });
  }

  gravarProdutores(){
    if (this.id) {
      this.service
          .atualizar(this.produtores)
          .subscribe(respostaSucesso =>{
            this.sucesso = true;
            this.errosApi = null;
          }, respostaComErro => {
            this.errosApi = ['Erro ao atulizar o produtor']
          })
    }else{
      this.service
      .salvar(this.produtores)
      .subscribe(resposta => {
        this.sucesso = true;
        this.errosApi = null;
        this.produtores = resposta;
      }, erroNaResposta =>{
        this.errosApi = erroNaResposta.error.erros;
        this.sucesso = false;
      })
    }
  }

  voltarParaListagem(){
    this.router.navigate(['/produtoresLista'])
  }
}
