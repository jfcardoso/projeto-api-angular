import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { Curso } from './curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  //url base
  url = "http://localhost:8080/api/php/";

  //vetor para armazenar os cursos obtidos
  cursos: Curso[] = [];

  constructor(
    private httpClientService: HttpClient
  ) { }

  //obter todos os cursos
  obterCursos():Observable<Curso[]>{
    return this.httpClientService.get(this.url + "listar").pipe(
      map((res: any) => { //sem o any ele espera receber um Object, dando erro.
        this.cursos = res['cursos'];
        return this.cursos;
      })
    )    
  }

}
