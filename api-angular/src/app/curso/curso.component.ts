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
  cursos: Curso[] = [];

  curso = new Curso();
  
  constructor (
    private cursoService: CursoService
  ){}

  ngOnInit(): void {
    //ao iniciar a aplicação, os cursos são carregados
    this.selecionar()
  }

  cadastrar(){
   this.cursoService.cadastrarCurso(this.curso).subscribe(
      (res: Curso[]) => {
        
        // add dados ao vetor
        this.cursos = res;

        //limpando os atributos
        this.curso.nomeCurso = "";
        this.curso.valorCurso = 0;

        //atualiza a listagem
        this.selecionar();
    } 
   )
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
