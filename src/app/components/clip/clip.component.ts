import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../shared/project.model';

@Component({
  selector: 'app-clip',
  templateUrl: './clip.component.html',
  styleUrls: ['./clip.component.scss']
})
export class ClipComponent implements OnInit {
  project: Project;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private projectsService: ProjectsService,
  ) { }

  ngOnInit() {
    this.getProject();
  }

  getProject(): void {
    const projectID: number = Number(this.route.snapshot.paramMap.get('id'));
    this.project = this.projectsService.getProject(projectID);
  }

  goBack(): void {
    this.location.back();
  }

}
