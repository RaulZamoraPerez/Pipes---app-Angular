import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase' // Ejem  'Raul' | toggleCase
})

export class ToggleCasePipe implements PipeTransform {


  transform(value: string, upper: boolean = true, ...args: any[]): string {


    return upper ? value.toUpperCase() : value.toLowerCase();
  }
}
