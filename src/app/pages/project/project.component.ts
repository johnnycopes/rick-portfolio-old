import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { ProjectService } from '../../services/project.service';
import { Project } from '../../shared/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  project: Project;
  photoIndex = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.getProject();

    // Force scroll to top of page
    // https://stackoverflow.com/questions/39601026/angular-2-scroll-to-top-on-route-change/42671138
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  getProject(): void {
    const projectID: number = Number(this.route.snapshot.paramMap.get('id')); // grab project ID from the URL
    this.project = this.projectService.getProject(projectID);
  }

  decreasePhotoIndex(): void {
    if (this.project.photos) {
      this.photoIndex - 1 < 0 ? this.photoIndex = this.project.photos.length - 1 : this.photoIndex--;
    }
  }

  increasePhotoIndex(): void {
    if (this.project.photos) {
      this.photoIndex + 1 > this.project.photos.length - 1 ? this.photoIndex = 0 : this.photoIndex++;
    }
  }
}
