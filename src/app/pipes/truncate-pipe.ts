import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {
  transform(value: string | null | undefined, limit = 120, suffix = '…'): string {
    const text = (value ?? '').trim();
    if (text.length <= limit) return text;
    return text.slice(0, limit).trimEnd() + suffix;
  }
}
