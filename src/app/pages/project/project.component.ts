import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProjectService } from '../../services/project.service';
import { Project } from '../../shared/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  project: Project;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.getProject();
  }

  getProject(): void {
    const projectID: number = Number(this.route.snapshot.paramMap.get('id')); // grab project ID from the URL
    this.project = this.projectService.getProject(projectID);
  }

  goBack(): void {
    this.location.back();
  }

}
