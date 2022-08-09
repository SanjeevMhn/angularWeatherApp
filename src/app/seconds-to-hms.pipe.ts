import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToHMS'
})
export class SecondsToHMSPipe implements PipeTransform {

  transform(value: number): string {
    let date = new Date(value * 1000);
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    let result = `${hrs}:${mins}:${secs}`;
    return result;
  }

}
