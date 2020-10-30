import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
    this.createForm();
  }
  createForm(){
    this.formAutor = this.formBuilder.group({
      nome:['', [Validators.required, Validators.minLength(3)]],
      dataNascimento:[null, Validators.required],
      nacionalidade:['', Validators.required]
    });
  }

  submitForm(){
    console.log('Submetido');
    //console.log(this.formAutor.value);
    let autor:Autor = new Autor();
    if(this.formAutor.valid){
      autor.nome = this.formAutor.value.nome;
      autor.dataNascimento = this.formAutor.value.dataNascimento;
      autor.nacionalidade = this.formAutor.value.nacionalidade;
    }
    console.log(autor);
    this.limparCampos();
  }

  limparCampos(){
    this.createForm();
  }
 
}
