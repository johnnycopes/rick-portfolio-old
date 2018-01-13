import { Injectable } from '@angular/core';

import { Project } from '../shared/project.model';
import { PROJECTS } from '../shared/project.data';

@Injectable()
export class ProjectService {

  getProjects(): Project[] {
    return PROJECTS;
  }

  getProject(id: number): Project {
    return PROJECTS.filter(project => project.id === id)[0];
  }

  constructor() { }
}
