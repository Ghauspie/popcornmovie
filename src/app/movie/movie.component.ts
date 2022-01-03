import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
/* import { Movies } from '../models/movie.model'; */
import {HttpClient} from '@angular/common/http';
import { youtubeService } from '../models/youtube.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @ViewChild('closeBtn') closeBtn!: ElementRef;
  movies:any=[];
  Movie:any=[];
  SearchMovie!: string ;
  movieOne:any=document.getElementById('movieOne');
  public inputSearch!:string;
  public imgurl="https://image.tmdb.org/t/p/original";
  constructor(private httpClient: HttpClient) { }


  ngOnInit(): void {

  }

  //function for send the input SearchMovie
  clickme(){
    console.log(this.SearchMovie);
    let find:string=this.SearchMovie;
    this.getMovie(find);

  }  

  //function for display the result of the request SearchMovie
  getMovie(inputSearch:string):void{
    let inputSearchClean:string = inputSearch.replace(/ /g,"+");
    this.httpClient.get<any>('http://api.themoviedb.org/3/search/multi?api_key=9d8b48fb32540c5a9d149f413900ee04&query='+inputSearchClean).subscribe((Response: any)=>{
      console.log(Response.results);
     this.movies=Response.results; 
     this.inputSearch=inputSearch;
     let dynamic:any=document.querySelector('.dynamic')
     dynamic.removeAttribute('class');
     dynamic.setAttribute('class','dynamic');
    });
  }

  //Function for reset the input SearchMovie  and the result
  resetResult(){
    let dynamic:any=document.querySelector('.dynamic')
    dynamic.removeAttribute('class');
    dynamic.setAttribute('class','dynamic hidden');
    this.SearchMovie="";
  }
  //function for when click on "enter" send the SearchMovie
  handleKeyUp(event:any){
    if (event.keyCode===13){
      this.clickme();
    }
  }
  //function for display one movie
  movie(id:number):void{
    console.log(id);
    this.httpClient.get<any>('https://api.themoviedb.org/3/movie/'+id+'?api_key=9d8b48fb32540c5a9d149f413900ee04').subscribe((Response: any)=>{
      console.log(Response);
     this.Movie=Response; 
     let movieOne:any=document.getElementById('movieOne')
     movieOne.removeAttribute("class");  
     let itemList:any=document.querySelector('.itemList')
     itemList.setAttribute('class','hidden');
    });
  }
  
  private closeModal():void{
    this.closeBtn.nativeElement.click();
  }

   closemovie(){
     this.closeModal;
    console.log("test de la fenetre close")
    let movieOne:any=document.getElementById('movieOne')
     movieOne.setAttribute("class",'hidden');  
     let itemList:any=document.querySelector('.itemList')
     itemList.removeAttribute('class');
     itemList.setAttribute("class","itemList");
  }  
}

