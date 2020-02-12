import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { RedirectToSecond } from '../state/app.actions';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit() {
  }

  onClick() {
    console.log("Clicked");
    this.store.dispatch(RedirectToSecond);
  }

}
