import { Component, OnInit } from '@angular/core';
import { ProjectComponent } from '../../pages/project/project.component';
import { Project } from '../../shared/project.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  projects: Project[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.projects = this.dataService.getProjects();
  }
}
