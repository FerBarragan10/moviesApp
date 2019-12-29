import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }
  getPopulares(){
    return this.http.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1400f66af1b704944684f381e4c6076e&language=es');
  }


  buscarPelicula(pelicula:string){
    console.log(pelicula);
    return this.http.get(`https://api.themoviedb.org/3/search/movie?query=${pelicula}&sort_by=popularity.desc&api_key=1400f66af1b704944684f381e4c6076e&language=es`);
  }
 
  
}
