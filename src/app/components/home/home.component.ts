import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  peliculas:any[]=[];
  constructor(private movies:MoviesService) { }

  ngOnInit() {
    this.getPopulares();
  }
  getPopulares(){
    this.movies.getPopulares().subscribe((data:any)=>{
      console.log(data);
    this.peliculas=data;
    });
  }  
}
