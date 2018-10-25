import { Component, OnInit } from '@angular/core';
import { ShipsService } from '../ships.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {

  ships: Object

  constructor(private data: ShipsService) { }

  ngOnInit() {
    this.data.getShips().subscribe(data => {
      this.ships = data
      console.log(this.ships)
    })
  }

}