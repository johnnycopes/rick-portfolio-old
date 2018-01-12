import { Injectable } from '@angular/core';

import { Project } from '../shared/project.model';
import { PROJECTS } from '../shared/project.data';
import { Misc } from '../shared/misc.model';
import { MISC } from '../shared/misc.data';

@Injectable()
export class DataService {

  getProjects(): Project[] {
    return PROJECTS;
  }

  getProject(id: number): Project {
    return PROJECTS.filter(project => project.id === id)[0];
  }

  getMisc(): Misc {
    return MISC;
  }

  constructor() { }
}
