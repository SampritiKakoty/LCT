import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderpipe'
})
export class GenderpipePipe implements PipeTransform {

  transform(n: string, g: string): string {
    if(g=='male'||g=='Male')
    return 'Mr.'+n;
    else return 'Ms. '+n;
  }

}
