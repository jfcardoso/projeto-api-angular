import { HttpClient, HttpParams } from '@angular/common/http';
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
    return this.httpClientService.get(this.url + 'listar').pipe(
      map((res: any) => { //sem o any ele espera receber um Object, dando erro.
        this.cursos = res['cursos'];
        return this.cursos;
      })
    )    
  }

  //cadastrar um novo curso
  cadastrarCurso(c:Curso):Observable<Curso[]>{
    return this.httpClientService.post(this.url +'cadastrar', {cursos:c})
                .pipe( map((res:any)=>{
                  this.cursos.push(res['cursos']);
                  return this.cursos;
                }))    
  }

  //remover um curso
  removerCurso(c: Curso):Observable<Curso[]>{

    const params = new HttpParams().set("idCurso", c.idCurso!.toString());

    return this.httpClientService.delete(this.url +'excluir', {params: params})
                .pipe( map((res:any)=>{
                  
                  const filtro = this.cursos.filter((curso)=>{
                    return +curso['idCurso'] !== +c.idCurso;
                  });

                  return this.cursos = filtro;
                }))    
  }

}
