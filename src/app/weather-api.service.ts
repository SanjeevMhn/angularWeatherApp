import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(private http:HttpClient) { }
  getWeather(location:string){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d9cfbe8becc1b08093e6a506fdee6bdb`)
  }
}
