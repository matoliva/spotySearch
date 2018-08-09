import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  artists = [];

  constructor() { }

  ngOnInit() {
  }

  saveData(event) {
    this.artists = event;
    //console.log(this.artists);
  }

}
