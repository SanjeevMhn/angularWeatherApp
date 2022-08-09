import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempretureFahrenheit'
})
export class TempretureFahrenheitPipe implements PipeTransform {

  transform(value: number): number {
    let fahrenheit = (value - 273.15) * 1.8 + 32;
    return Number(fahrenheit.toFixed(2));
  }

}
