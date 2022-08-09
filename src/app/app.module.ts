import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';

import { ReactiveFormsModule } from '@angular/forms';
import { WeatherApiService } from './weather-api.service';
import { HttpClientModule } from '@angular/common/http';
import { TempretureCelciusPipe } from './tempreture-celcius.pipe';
import { TempretureFahrenheitPipe } from './tempreture-fahrenheit.pipe';
import { SecondsToHMSPipe } from './seconds-to-hms.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    TempretureCelciusPipe,
    TempretureFahrenheitPipe,
    SecondsToHMSPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [WeatherApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
