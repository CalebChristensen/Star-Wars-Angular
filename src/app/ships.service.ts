import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  constructor(private http: HttpClient) { }

  getShips() {
    return this.http.get('https://swapi.co/api/starships/')
  }

}
