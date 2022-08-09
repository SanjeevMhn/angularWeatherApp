import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempretureCelcius'
})
export class TempretureCelciusPipe implements PipeTransform {

  transform(value: number): number {
    let celsius = value - 273.15;
    return Number(celsius.toFixed(2));
  }

}
