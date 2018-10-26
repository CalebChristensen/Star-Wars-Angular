import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { FilmsService } from './films.service';
import { PeopleService } from './people.service';
import { ShipsService } from './ships.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'Star Wars API';
  myForm: FormGroup;
  midichlorians: Object;

  constructor(
    private fb: FormBuilder,
    private filmsService: FilmsService,
    private peopleService: PeopleService,
    private shipsService: ShipsService) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      jediLies: new FormControl(),
      order66: new FormControl(),
    })
    this.myForm.valueChanges.subscribe(console.log)
  }
  clickIt() {
    if (this.myForm.value.jediLies === 'films') {
      this.filmsService.getFilms(this.myForm.value.order66)
        .subscribe(data => {
          console.log(data)
          this.midichlorians = data
        })
    }else if (this.myForm.value.jediLies === 'people') {
      this.peopleService.getPeople(this.myForm.value.order66)
        .subscribe(data => {
          console.log(data)
          this.midichlorians = data
        })
    }else if (this.myForm.value.jediLies === "ships"){
      this.shipsService.getShips(this.myForm.value.order66)
        .subscribe(data =>{
          console.log(data)
          this.midichlorians = data
        })
    } else{
      console.log('This is why you fail')
    }
    
  }
}
