import { SafeResourceUrl } from '@angular/platform-browser/src/security/dom_sanitization_service';

export class Project {
  constructor(
    public id: number,
    public headline: string,
    public title: string,
    public path: string,
    public clips: { name: string, id: string, link: SafeResourceUrl }[]
  ) { }
}
