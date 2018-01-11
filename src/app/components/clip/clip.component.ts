import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../shared/project.model';
import { SafeResourceUrl } from '@angular/platform-browser/src/security/dom_sanitization_service';

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
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.getProject();
  }

  getProject(): void {
    const projectID: number = Number(this.route.snapshot.paramMap.get('id')); // grab project ID from the URL
    this.project = this.projectsService.getProject(projectID);
    this.project.clips.forEach((clip) => {
      clip.link = this.sanitizer.bypassSecurityTrustResourceUrl(`https://player.vimeo.com/video/${clip.id}`);
    });
  }

  goBack(): void {
    this.location.back();
  }

}
