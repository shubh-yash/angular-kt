import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: string, gender: string): string {
    if(gender.toLowerCase()=='male'){
      return 'Mr. '+value;
    }
    else if(gender.toLowerCase()=='female'){
      return 'Mrs. '+value;
    }
    return value;
  }

}
