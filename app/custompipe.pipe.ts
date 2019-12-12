import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let str = value;
    if(args[0] == "Kalyani")
    {
      str += " from shrirampur" ;
    }
    return str;
  }

}
