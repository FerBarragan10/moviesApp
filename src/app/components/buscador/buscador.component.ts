import { Component, OnInit } from '@angular/core';
import{MoviesService} from '../../services/movies.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {
  buscar:string="";
  busqueda:any[]=[];
  constructor(private service:MoviesService) { }

  ngOnInit() {
  }
  buscarPelicula(){
    console.log(this.buscar);
    this.service.buscarPelicula(this.buscar).subscribe((data:any)=>{
        console.log(data);
        this.busqueda=data;
    })

    }
  }


