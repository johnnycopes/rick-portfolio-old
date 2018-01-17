import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { Misc, Website, Song, Instagram } from '../../shared/misc.model';
import { MiscService } from '../../services/misc.service';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition('* <=> *', [
        style({
          opacity: 0
        }),
        animate('175ms ease-in', style({
          opacity: 1
        }))
      ])
    ])
  ]
})
export class MiscComponent implements OnInit {
  misc: Misc;
  website: Website;
  song: Song;
  instagram: Instagram;
  state = 'normal';

  constructor(private miscService: MiscService) { }

  ngOnInit() {
    this.getMisc();
    this.getRandomLinks();
  }

  getMisc(): void {
    this.misc = this.miscService.getMisc();
  }

  getRandomLinks(): void {
    this.state === 'normal' ? this.state = 'abnormal' : this.state = 'normal';
    this.website = this.miscService.getRandomLink(this.misc.websites, this.website);
    this.song = this.miscService.getRandomLink(this.misc.songs, this.song);
    this.instagram = this.miscService.getRandomLink(this.misc.instagrams, this.instagram);
  }

}
