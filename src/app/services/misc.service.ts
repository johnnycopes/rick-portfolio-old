import { Injectable } from '@angular/core';

import { Misc, Website, Song, Instagram } from '../shared/misc.model';
import { MISC } from '../shared/misc.data';

@Injectable()
export class MiscService {

  getMisc(): Misc {
    return MISC;
  }

  // TODO: make these types accept specific arrays/interfaces
  getRandomLink(arr: any, currentLink: any) {
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
