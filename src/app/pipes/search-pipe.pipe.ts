// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'searchPipe'
// })
// export class SearchPipePipe implements PipeTransform {

//   transform(value: unknown, ...args: unknown[]): unknown {
//     return 121;
//   }

// }


import { Pipe, PipeTransform } from '@angular/core';
import { Result } from 'src/app/services/rick-morty.interface';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {
  transform(characters: Result[], searchTerm: string): Result[] {
    if (!searchTerm) {
      return characters;
    }
    searchTerm = searchTerm.toLowerCase();
    return characters.filter(character =>
      character.name.toLowerCase().includes(searchTerm)
    );
  }
}
