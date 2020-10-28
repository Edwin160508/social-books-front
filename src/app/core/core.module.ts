import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AutorComponent } from './autor/autor.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
/* Modulos do Primng*/
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [AutorComponent, PaginaNaoEncontradaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    /*PrimeNG*/
    ButtonModule,
    InputTextModule
  ]
})
export class CoreModule { }
