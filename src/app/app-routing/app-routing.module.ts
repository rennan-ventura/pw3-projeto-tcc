import { CadastroClienteComponent } from './../cadastro-cliente/cadastro-cliente.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WhoYaComponent } from '../who-ya/who-ya.component';
import { PagInicialComponent } from '../pag-inicial/pag-inicial.component';

export const routes: Routes = [
    {path: 'cadastro-cliente', component: CadastroClienteComponent},
    {path: 'whoYa', component: WhoYaComponent},
    {path: '', component: PagInicialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
