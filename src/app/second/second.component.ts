import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { RedirectToFirst } from '../state/app.actions';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  constructor(private store: Store) { }

  onClick() {
    console.log("Back to home");
    this.store.dispatch(RedirectToFirst)
  }

  ngOnInit() {
  }

}
