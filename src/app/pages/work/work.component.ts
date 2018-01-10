import { Component, OnInit } from '@angular/core';
import { ProjectComponent } from '../../components/project/project.component';
import { Project } from '../../shared/project.model';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  projects: Project[];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.projects = this.projectsService.getProjects();
  }
}
