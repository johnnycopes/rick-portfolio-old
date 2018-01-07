import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../shared/project.model';
// import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;

  constructor(
    // private projectService: ProjectsService
  ) { }

  ngOnInit() {
  }

}
