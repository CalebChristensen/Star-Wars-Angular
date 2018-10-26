import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  constructor(private http: HttpClient) { }

  getShips(order66) {
    return this.http.get(`https://swapi.co/api/starships/?search=${order66}`)
  }

}
