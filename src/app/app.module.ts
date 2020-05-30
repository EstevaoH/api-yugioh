import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial.component';
import { AppRoutingModule } from './app-routing.module';
import { BuscarCartaComponent } from './components/buscar-carta/buscar-carta.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    BuscarCartaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
