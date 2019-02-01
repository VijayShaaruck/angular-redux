import { Action } from '@ngrx/store';
import { TripDetails } from '../models/trip-details';

export enum FeActionTypes {
  SET_FE = 'SET_FE',
  LOAD_DATA = 'LOAD_DATA',
  SET_DATA = 'SET_DATA'
}

export class SetFE implements Action {
  readonly type = FeActionTypes.SET_FE;
  constructor(public payload: string) {}
}

export class LoadData implements Action {
  readonly type = FeActionTypes.LOAD_DATA;
  constructor(public payload: string) {}
}

export class SetData implements Action {
  readonly type = FeActionTypes.SET_DATA;
  constructor(public payload: TripDetails[]) {}
}

export type Action = SetFE | SetData;
