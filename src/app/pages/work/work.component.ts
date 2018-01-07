import { Component, OnInit } from '@angular/core';
import { ProjectComponent } from '../../components/project/project.component';

import { PROJECTS } from '../../shared/project.data';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  projects = PROJECTS;

  constructor() { }

  ngOnInit() {
  }

}
