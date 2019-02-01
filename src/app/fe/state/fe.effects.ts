import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { FeActionTypes } from './fe.actions';
import * as FeActions from './fe.actions';
import { FeService } from '../services/fe.service';
import { TripDetails } from '../models/trip-details';

@Injectable()
export class FeEffects {
  constructor(
    private router: Router,
    private actions$: Actions,
    private feService: FeService
  ) {}

  @Effect()
  feLoad = this.actions$.pipe(
    ofType(FeActionTypes.LOAD_DATA),
    map((action: FeActions.LoadData) => {
      return action.payload;
    }),
    mergeMap(fe => {
      return this.feService.getTripDetails(fe).pipe(
        map((value: TripDetails[]) => {
          return new FeActions.SetData(value);
        })
        // catchError(err => {
        //   return of(new FeActions.Error(err));
        // })
      );
    })
  );
}
