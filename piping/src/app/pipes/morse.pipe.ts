import { Pipe, PipeTransform } from '@angular/core';
import { Md5 } from 'ts-md5';

@Pipe({
  name: 'morse'
})
export class MorsePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {

    let output = "";

    for (let index = 0; index < value.length; index++) {
      const character = value[index];
      
      switch (character.toLowerCase()) {
        case "a":
          output += ".-"
          break;
        case "b":
          output += "-..."
          break;
        case "c":
          output += "-.-."
          break;
        
        default:
          break;
      }
    }

    output += Md5.hashStr(output);

    return output;
  }

}
