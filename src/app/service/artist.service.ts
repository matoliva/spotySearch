import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  
  token: string = "BQDzW3Jw837cwk2LRaSSUxx5d-guKV6rhypDnEyjwFysIwc4yTRg1TBLT1zFlKXKT3l7e7MfjMl1CTSXZrUnrjGahdHrY3HqVrwgJVEOA0AC0R-jLQcjqjK-7ZCafCX5dUeNHzHmu3hil4W13axjBs_7ecwT";
  clientId: string = "08889519b4c24d199dcfa8a0c731c598";
  nameOfArtist: string = '';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' +  this.token,
    })
  };

  getArtist(nameOfArtist: string) {
    return this.http.get("https://api.spotify.com/v1/search?q="+nameOfArtist+"&type=artist", this.httpOptions);
  }
}
