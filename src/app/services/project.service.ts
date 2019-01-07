import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Project } from '../shared/project.model';
import { PROJECTS } from '../shared/project.data';

@Injectable()
export class ProjectService {

  constructor() { }

  getProjects(): Observable<Project[]> {
    return of(PROJECTS);
  }

  getProject(title: string | null): Observable<Project> {
    return of(PROJECTS.filter(project => project.title === title)[0]);
  }

}
