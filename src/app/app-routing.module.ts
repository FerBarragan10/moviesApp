import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {BuscadorComponent} from'./components/buscador/buscador.component';


const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'buscar',
    component:BuscadorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
