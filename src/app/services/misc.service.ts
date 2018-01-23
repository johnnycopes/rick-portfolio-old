import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Misc, Website, Song, Instagram } from '../shared/misc.model';
import { MISC } from '../shared/misc.data';

@Injectable()
export class MiscService {

  getMisc(): Observable<Misc> {
    return of(MISC);
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
