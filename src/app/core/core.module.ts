import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AutorComponent } from './autor/autor.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';

@NgModule({
  declarations: [AutorComponent, PaginaNaoEncontradaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class CoreModule { }
