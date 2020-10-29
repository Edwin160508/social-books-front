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

  submitForm(){
    console.log('Submetido');
    console.log(this.formAutor.value);
    this.limparCampos();
  }

  limparCampos(){
    this.createForm(new Autor);
  }
 
}
