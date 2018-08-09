import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  
  token: string = "BQAtSmAqFrB7xdgx9BuO95X-_khkcuukV5OPlvUkzQG9Y8RHwf2CfwjZvcOFHwbvzdVUzCLu1sv8dBbMqX00xklLfyhWEGFp6q8nJzQoubBBB9uOZccuXLIWVp_M-3HQo6WGwTFnoI2ICvb-HcWznb7ADBGQ";
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
