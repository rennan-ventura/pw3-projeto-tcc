import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who-ya',
  templateUrl: './who-ya.component.html',
  styleUrls: ['./who-ya.component.css']
})
export class WhoYaComponent implements OnInit {

  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  constructor() { }

  ngOnInit(): void {
  }

}


