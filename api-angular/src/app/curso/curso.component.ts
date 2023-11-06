import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  constructor (){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  cadastrar(){
    alert("Cadastro realizado com sucesso")
  }

  selecionar(){
    alert("Cadastro selecionado com sucesso.")
  }

  alterar(){
    alert("Cadastro alterado com sucesso.")
  }

  excluir(){
    alert("Cadastro excluído com sucesso.")
  }

}
