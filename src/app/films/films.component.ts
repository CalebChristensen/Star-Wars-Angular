import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films: Object

  constructor(private data: FilmsService) { }

  ngOnInit() {
    this.data.getFilms().subscribe(data => {
      this.films = data
      console.log(this.films)
    })
  }

}
