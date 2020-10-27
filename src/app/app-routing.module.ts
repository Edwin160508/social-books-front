import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';
import { AutorComponent } from './core/autor/autor.component';

const routes: Routes = [
  { path: '', redirectTo: 'autor', pathMatch: 'full' },
  { path: 'autor', component: AutorComponent },
  {path:'pagina-nao-encontrada', component:PaginaNaoEncontradaComponent},
  { path:'**', redirectTo:'pagina-nao-encontrada', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
