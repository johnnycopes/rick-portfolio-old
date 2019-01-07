import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
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
  photoIndex = 0;

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowLeft':
        this.decreasePhotoIndex();
        break;
      case 'ArrowRight':
        this.increasePhotoIndex();
        break;
    }
  }

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.getProject();
    window.scrollTo(0, 0);
  }

  goBack(): void {
    this.location.back();
  }

  getProject(): void {
    const projectID = this.route.snapshot.paramMap.get('id'); // grab project ID from the URL
    this.projectService.getProject(projectID)
      .subscribe(project => this.project = project);
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
