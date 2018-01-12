import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DataService } from '../../services/data.service';
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
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getProject();
  }

  getProject(): void {
    const projectID: number = Number(this.route.snapshot.paramMap.get('id')); // grab project ID from the URL
    this.project = this.dataService.getProject(projectID);
  }

  goBack(): void {
    this.location.back();
  }

}
