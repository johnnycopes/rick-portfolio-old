import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeResourceUrl } from '@angular/platform-browser/src/security/dom_sanitization_service';

@Pipe({
  name: 'safeResourceUrl'
})
export class SafeResourceUrlPipe implements PipeTransform {
  constructor(
    protected sanitize: DomSanitizer
  ) { }

  public transform(url: string): SafeResourceUrl {
    return this.sanitize.bypassSecurityTrustResourceUrl(url);
  }
}
