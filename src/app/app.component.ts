import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('animateRoutes', [
      transition('*<=>*', [
        group([
          query(
            ':enter',
            [
              style({ opacity: 0 }),
              animate( '250ms ease-in-out')
            ],
            {optional: true}
          ),
          query(
            ':leave',
            [
              style({ opacity: 0, position: 'absolute' })
            ],
            { optional: true }
          ),
        ])
      ])
    ])
  ]
})
export class AppComponent {

  constructor(public router: Router) { }

  getPage(outlet: any) {
    return outlet.activatedRouteData;
  }
}
