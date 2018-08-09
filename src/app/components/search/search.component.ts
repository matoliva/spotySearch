import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ArtistService } from '../../service/artist.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() sendArtists = new EventEmitter();

  artistSearch: any = [];

  constructor(private service: ArtistService) { }

  ngOnInit() {
  }

  getArtist(artist) {
    this.service.getArtist(artist)
      .subscribe(
        (response: any) => {
          //console.log(response);
          this.artistSearch = response.artists.items;
          console.log(this.artistSearch);
          this.sendArtists.emit(this.artistSearch);
        })
  }

  /*searchArtist() {
    this.artistSearch = this.service.getArtist();
    console.log(this.artistSearch);
    this.sendArtists.emit(this.artistSearch);
  }*/

}
