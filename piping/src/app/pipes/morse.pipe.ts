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
          
        case "d":
          output += "-.."
          break;
        
        case "e":
          output += "."
          break;
          
        case "f":
          output += "..-."
          break;
          
        case "g":
          output += "--."
          break;
          
        case "h":
          output += "...."
          break;
          
        case "i":
          output += ".."
          break;
          
        case "j":
          output += ".---"
          break;
          
        case "k":
          output += "-.-"
          break;
          
        case "l":
          output += ".-.."
          break;
          
        case "m":
          output += "--"
          break;
          
        case "n":
          output += "-."
          break;
          
        case "o":
          output += "---"
          break;
          
        case "p":
          output += ".--."
          break;
          
        case "q":
          output += "--.-"
          break;
          
        case "r":
          output += ".-."
          break;
          
        case "s":
          output += "..."
          break;
          
        case "t":
          output += "-"
          break;

        case "u":
          output += "..-"
          break;
            
        case "v":
          output += "...-"
          break;
          
        case "w":
          output += ".--"
          break;
          
        case "x":
          output += "-..-"
          break;
          
        case "y":
          output += "-.--"
          break;
          
        case "z":
          output += "--.."
          break;
          
        case "æ":
          output += ".-.-"
          break;
          
        case "ø":
          output += "---."
          break;
          
        case "å":
          output += ".--.-"
          break;
          
        default:
          break;
      }
    }

    output += Md5.hashStr(output);

    return output;
  }

}
