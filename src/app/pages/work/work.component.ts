import { Component, OnInit } from '@angular/core';

import { ProjectComponent } from '../../pages/project/project.component';
import { Project } from '../../shared/project.model';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  projects: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.projects = this.projectService.getProjects();
  }
}
