import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

/*Módulos do PrimeNG*/ 
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';

import { AutorComponent } from '../autor.component';

@NgModule({
  declarations: [AutorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    CalendarModule

  ]
})
export class AutorModule { }
