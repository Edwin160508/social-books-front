import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Autor } from './shared/autor';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {

  formAutor: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm(new Autor());
  }
  createForm(autor: Autor){
    this.formAutor = this.formBuilder.group({
      nome:[autor.nome],
      dataNascimento:[autor.dataNascimento],
      nacionalidade:[autor.nacionalidade]
    });
  }
  /*
  createForm(cliente: Cliente) {
    this.formCliente = new FormGroup({
      nome: new FormControl(cliente.nome),
      tipo: new FormControl(cliente.tipo),
      genero: new FormControl(cliente.genero),
      dataNascimento: new FormControl(cliente.dataNascimento),
      observacao: new FormControl(cliente.observacao),
      inativo: new FormControl(cliente.inativo)
    })
  }
  */ 
}
