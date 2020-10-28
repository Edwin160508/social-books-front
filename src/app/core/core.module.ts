import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutorComponent } from './autor/autor.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
/* Modulos do Primng*/
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [AutorComponent, PaginaNaoEncontradaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    /*PrimeNG*/
    ButtonModule,
    InputTextModule,
    CalendarModule
  ]
})
export class CoreModule { }
