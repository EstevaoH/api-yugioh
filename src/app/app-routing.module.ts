import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial.component';
import { BuscarCartaComponent } from './components/buscar-carta/buscar-carta.component';

const routes:   Routes = [
  {path: '', redirectTo: '/pagina-inicial', pathMatch:'full'},
  {path: 'pagina-inicial', component: PaginaInicialComponent},
  {path: 'buscar-carta', component: BuscarCartaComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
