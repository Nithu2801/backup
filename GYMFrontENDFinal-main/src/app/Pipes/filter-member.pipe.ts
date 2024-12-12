import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMember'
})
export class FilterMemberPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
