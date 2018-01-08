import { Injectable } from '@angular/core';
import { Project } from '../shared/project.model';
import { PROJECTS } from '../shared/project.data';

@Injectable()
export class ProjectsService {

  getProjects(): Project[] {
    return PROJECTS;
  }

  constructor() { }

}
