import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produtores } from './produtores/produtores';

@Injectable({
  providedIn: 'root'
})
export class ProdutoresService {

  urlApi: string = environment.UrlBaseApi + "/api/produtores";

  constructor( private http : HttpClient) { 

  }

  salvar(produtores: Produtores) : Observable<Produtores>{
    return this.http.post<Produtores>(this.urlApi, produtores);
  }

  getProdutores() : Observable<Produtores[]>{
    return this.http.get<Produtores[]>(this.urlApi);
  }

  getPrudutorById(id: number) : Observable<Produtores>{
    return this.http.get<Produtores>(this.urlApi + `/${id}`);
  }

  atualizar(produtores: Produtores) : Observable<any>{
    return this.http.put<Produtores>(this.urlApi + `/${produtores.id}`, produtores);
  }
  deletar(produtores: Produtores) : Observable<any>{
    return this.http.delete<any>(this.urlApi + `/${produtores.id}`);
  }

}
