import { State, Action, StateContext } from '@ngxs/store';
import { RedirectToFirst, RedirectToSecond } from './app.actions';

export class AppStateModel {
  public items: string[];
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    items: []
  }
})
export class AppState {
  @Action(RedirectToFirst)
  redirectToFirst(ctx: StateContext<AppStateModel>, action: RedirectToFirst) {
    const state = ctx.getState();
    console.log("Hello from store, going to second");
  }

  @Action(RedirectToSecond)
  redirectToSecond(ctx: StateContext<AppStateModel>, action: RedirectToSecond) {
    const state = ctx.getState();
    console.log("Hello from store, going back to first");
  }
}
