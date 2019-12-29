import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { LoadingComponent } from './components/loading/loading.component';
import {HttpClientModule} from '@angular/common/http';
import { ImagesPipe } from './pipes/images.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscadorComponent,
    NavbarComponent,
    PeliculaComponent,
    LoadingComponent,
    ImagesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
