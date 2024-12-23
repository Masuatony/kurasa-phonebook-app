import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCaseToUpper',
  standalone: true,
})
export class CamelCaseToUpperPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    if (!value) return '';
    return value.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
  }
}
