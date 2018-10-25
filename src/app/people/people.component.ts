import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people: Object

  constructor(private data: PeopleService) { }

  ngOnInit() {
    this.data.getPeople().subscribe(data => {
      this.people = data
      console.log(this.people)
    })
  }

}
