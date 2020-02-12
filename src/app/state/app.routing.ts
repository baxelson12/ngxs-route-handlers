import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RedirectToFirst, RedirectToSecond } from './app.actions';
import { Actions, ofActionDispatched } from '@ngxs/store';

@Injectable({ providedIn: 'root' })
export class RouteHandler {
  constructor(private router: Router, private actions$: Actions) {
    this.actions$.pipe(ofActionDispatched(RedirectToFirst, RedirectToSecond)).subscribe((val) => {
      if(val === RedirectToFirst) {
        this.router.navigate(['']);
      }
      if(val === RedirectToSecond) {
        this.router.navigate(['second']);
      }
    })
  }
}