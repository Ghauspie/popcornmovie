import { Component, OnInit } from '@angular/core';
/* import { Movies } from '../models/movie.model'; */
import {HttpClient} from '@angular/common/http';
import { youtubeService } from '../models/youtube.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movies:any=[];
  public inputSearch!:string;
  public imgurl="https://image.tmdb.org/t/p/original";
  private _movieListUrl="https://api.themoviedb.org/3/movie/550?api_key=9d8b48fb32540c5a9d149f413900ee04";
  constructor(private httpClient: HttpClient) { }

/*   fetchMovie= async() => {
    let moviesList=await fetch(this._movieListUrl).then(res =>res.json()).then(data=>this.movie=data);
    console.log(moviesList,this.movie);
  } */
  ngOnInit(): void {
     /* this.getMovie();  */
/*    let tesr=this._httpClient.get<Movies[]>(this._movieListUrl);
   return tesr;
   console.log(tesr); */
  this.getMovie("jurassic");

  }
  
  getMovie(inputSearch:string):void{
    let inputSearchClean:string = inputSearch.replace(/ /g,"+");
    this.httpClient.get<any>('http://api.themoviedb.org/3/search/multi?api_key=9d8b48fb32540c5a9d149f413900ee04&query='+inputSearchClean).subscribe((Response: any)=>{
      console.log(Response.results);
     this.movies=Response.results; 
     this.inputSearch=inputSearch;
    });
  }

}
