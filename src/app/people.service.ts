import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeople(order66) {
    return this.http.get(`https://swapi.co/api/people/?search=${order66}`)
  }

}
