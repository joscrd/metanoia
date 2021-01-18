import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public title: string;
  public subtitle: string;

  constructor() { 
    this.title = 'Metanoia';
    this.subtitle = 'subtitulo opcional';
  }

  ngOnInit(): void {
  }

}
