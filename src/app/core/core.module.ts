import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutorModule } from './autor/shared/autor.module';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';

@NgModule({
  declarations: [ PaginaNaoEncontradaComponent],
  imports: [
    CommonModule,
    AutorModule,   
    BrowserAnimationsModule,   
  ]
})
export class CoreModule { }
