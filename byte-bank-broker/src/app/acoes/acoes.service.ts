import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Acoes } from './modelo/acoes';

@Injectable({
  providedIn: 'root'
})
export class AcoesService {

  constructor(private httpClient: HttpClient) { }

  getAcoes(): Acoes {
    return this.httpClient.get<Acoes>('http://localhost:3000/acoes')
  }
}
