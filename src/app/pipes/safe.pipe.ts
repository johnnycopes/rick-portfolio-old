import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeStyle } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
  constructor(
    protected sanitize: DomSanitizer
  ) { }

  public transform(value: string, type: string): SafeResourceUrl | SafeStyle {
    switch (type) {
      case 'style':
        return this.sanitize.bypassSecurityTrustStyle(value);
      case 'resourceUrl':
        return this.sanitize.bypassSecurityTrustResourceUrl(value);
      default:
        throw new Error(`Invalid safe type specified: ${type}`);
    }
  }
}
