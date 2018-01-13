import { Injectable } from '@angular/core';

import { Misc, Website, Song, Instagram } from '../shared/misc.model';
import { MISC } from '../shared/misc.data';

@Injectable()
export class MiscService {

  getMisc(): Misc {
    return MISC;
  }

  getRandomLink<T>(arr: T[], currentLink: T): T {
    let randomNumber = this.generateRandomNumber(arr.length);
    while (randomNumber === arr.indexOf(currentLink)) {
      randomNumber = this.generateRandomNumber(arr.length);
    }
    return arr[randomNumber];
  }

  generateRandomNumber(arrLength: number): number {
    return Math.floor(Math.random() * arrLength);
  }

  constructor() { }
}
