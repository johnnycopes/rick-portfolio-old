import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../shared/project.model';

@Component({
  selector: 'app-project-tile',
  templateUrl: './project-tile.component.html',
  styleUrls: ['./project-tile.component.scss']
})
export class ProjectTileComponent implements OnInit {
  @Input() project: Project;

  ngOnInit() {
  }

}
