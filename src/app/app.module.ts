import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { InputsComponent } from './inputs/inputs.component';
import { PeopleComponent } from './people/people.component';
import { ShipsComponent } from './ships/ships.component';
import { FilmsComponent } from './films/films.component';


@NgModule({
  declarations: [
    AppComponent,
    InputsComponent,
    PeopleComponent,
    ShipsComponent,
    FilmsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
