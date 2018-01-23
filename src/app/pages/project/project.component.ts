import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { ProjectService } from '../../services/project.service';
import { Project } from '../../shared/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
  // animations: [
  //   trigger('fadeIn', [
  //     transition('* <=> *', [
  //       style({
  //         opacity: 0
  //       }),
  //       animate('175ms ease-in', style({
  //         opacity: 1
  //       }))
  //     ])
  //   ])
  // ]
})
export class ProjectComponent implements OnInit {
  project: Project;
  photoIndex = 0;
  state: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.getProject();
    window.scrollTo(0, 0);

    // Force scroll to top of page
    // https://stackoverflow.com/questions/39601026/angular-2-scroll-to-top-on-route-change/42671138
    // this.router.events.subscribe((evt) => {
    //   if (!(evt instanceof NavigationEnd)) {
    //     return;
    //   }
    //   window.scrollTo(0, 0);
    // });
  }

  getProject(): void {
    const projectID: number = Number(this.route.snapshot.paramMap.get('id')); // grab project ID from the URL
    this.projectService.getProject(projectID)
      .subscribe(project => this.project = project);
  }

  decreasePhotoIndex(): void {
    this.state === true ? this.state = false : this.state = true;
    if (this.project.photos) {
      this.photoIndex - 1 < 0 ? this.photoIndex = this.project.photos.length - 1 : this.photoIndex--;
    }
  }

  increasePhotoIndex(): void {
    this.state === true ? this.state = false : this.state = true;
    if (this.project.photos) {
      this.photoIndex + 1 > this.project.photos.length - 1 ? this.photoIndex = 0 : this.photoIndex++;
    }
  }
}
