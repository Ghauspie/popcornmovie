import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { HttpClient } from "@angular/common/http";

@Injectable()
export class youtubeService{

    constructor(private http: HttpClient){}

    fetchYoutube(titre:string): Observable<Object>{
        let titreStr = titre.replace(/ /g,"+");
        return this.http.get(`https://www.googleapis.com/youtube/v3/search?q=${titreStr}+bande+annonce+allociné&key=AIzaSyDwv-L_oFPOY9ApY_IYKBMG7cRox_k_0iA`);
    }

}