import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produto } from './produtos/produto';
import { ListaProdutos } from './produtos/produtos-lista/ListaProdutos';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  apiURL: string = environment.UrlBaseApi + "/api/produtos"

  constructor(private http: HttpClient) {  }

  salvar(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>(this.apiURL, produto);
  }

  busca(nome: string) : Observable<ListaProdutos[]>{
    if (!nome) {
      nome = "";
    }
    const httpParms = new HttpParams().set("nome",nome);
    const url = this.apiURL+"?"+httpParms.toString();
    return this.http.get<any>(url);
  }

  getProdutoById(id: number): Observable<Produto>{
    return this.http.get<Produto>(this.apiURL + `/${id}`);
  }

  atualizar(produto: Produto) : Observable<any>{
    return this.http.put<Produto>(this.apiURL + `/${produto.id}`, produto);
  }

  deletar(paciente: Produto) : Observable<any>{
    return this.http.delete<any>(this.apiURL + `/${paciente.id}`);
  }
}
