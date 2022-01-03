import { Component } from '@angular/core';
import { youtubeService } from './models/youtube.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'popcornmovie';
  youtube$:any;
  
  constructor(private youtubeService: youtubeService){}

  fetchYoutube(titre:string){
    //this.youtube$ = this.youtubeService.fetchYoutube();
    this.youtubeService.fetchYoutube(titre).subscribe((data:any) => {
      //this.youtube$ = data.items[0].id.videoId;
      if(data.items[0]){
        let divYoutube:any = document.querySelector("div#youtube");
        divYoutube.innerHTML = "Pas de bande annonce trouvé pour ce film."
      }
      let embed = `<iframe width="560" height="315" src="https://www.youtube.com/embed/`+data.items[0].id.videoId+`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      let divYoutube:any = document.querySelector("div#youtube");
      divYoutube.innerHTML = embed;
    }
    )
  }

}
