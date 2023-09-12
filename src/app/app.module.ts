import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuCabecalhoComponent } from './cabecalho/meu-cabecalho/meu-cabecalho.component';
import { CorpoComponent } from './principal/corpo/corpo.component';
import { RodapeComponent } from './principal/rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuCabecalhoComponent,
    CorpoComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
