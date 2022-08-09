import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { WeatherApiService } from '../weather-api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm!: FormGroup;
  public weatherData: any;
  constructor(
    private formBuilder: FormBuilder,
    private weatherApi: WeatherApiService
  ) { }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  onSubmit(formValues: any){
    this.weatherApi
    .getWeather(formValues.location)
    .subscribe(data => {
      console.log(data)
      this.weatherData = data;
    });
  }
}
