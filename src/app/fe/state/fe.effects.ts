import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';

import { FeActionTypes } from './fe.actions';
import * as FeActions from './fe.actions';
import { FeService } from '../services/fe.service';
import { FE } from '../models/fe.model';

@Injectable()
export class FeEffects {
  constructor(private actions$: Actions, private feService: FeService) {}

  @Effect()
  feLoad = this.actions$.pipe(
    ofType(FeActionTypes.LOAD_DATA),
    mergeMap(() => {
      return this.feService.loadFEs().pipe(
        map((value: FE[]) => {
          return new FeActions.SetData(value);
        })
        // catchError(err => {
        //   return of(new FeActions.Error(err));
        // })
      );
    })
  );
}
