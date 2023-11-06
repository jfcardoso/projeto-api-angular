import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  //url base
  url = "http://localhost:8080/api/php/";

  //vetor para armazenar os cursos obtidos
  cursos: Curso[] = []
  
  constructor (
    private cursoService: CursoService
  ){}

  ngOnInit(): void {
    //ao iniciar a aplicação, os cursos são carregados
    this.selecionar()
  }

  cadastrar(){
    alert("Cadastro realizado com sucesso");
  }

  selecionar(){
    this.cursoService.obterCursos().subscribe(
      (res: Curso[]) => {
        this.cursos = res;
      }
    )
  }

  alterar(){
    alert("Cadastro alterado com sucesso.");
  }

  excluir(){
    alert("Cadastro excluído com sucesso.");
  }

}
