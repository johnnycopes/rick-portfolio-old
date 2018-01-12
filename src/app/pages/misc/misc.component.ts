import { Component, OnInit } from '@angular/core';

import { Misc } from '../../shared/misc.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.scss']
})
export class MiscComponent implements OnInit {
  misc: Misc;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getMisc();
    console.log(this.misc);
  }

  getMisc(): void {
    this.misc = this.dataService.getMisc();
  }

}
