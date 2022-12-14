import { CadastroClienteComponent } from './../cadastro-cliente/cadastro-cliente.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagInicialComponent } from '../pag-inicial/pag-inicial.component';

export const routes: Routes = [
    {path: 'cadastro-cliente', component: CadastroClienteComponent},
    {path: '', component: PagInicialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
