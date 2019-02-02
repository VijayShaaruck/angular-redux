import { Action, FeActionTypes } from './fe.actions';
import { TripDetails, FE } from '../models/fe.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppFEAction, AppFEActionTypes } from 'src/app/state/app.actions';

export interface FeState extends EntityState<FE> {
  selectedFE: string | null;
}

export interface AppState extends fromRoot.AppState {
  fes: FeState;
}

export const feAdapter: EntityAdapter<FE> = createEntityAdapter<FE>();

const defaultFe: FeState = {
  ids: [],
  entities: {},
  selectedFE: ''
};

export const initialState = feAdapter.getInitialState(defaultFe);

export function feReducer(state = initialState, action: Action | AppFEAction) {
  switch (action.type) {
    case AppFEActionTypes.SET_FE:
      return {
        ...state,
        selectedFE: action.payload
      };
    case FeActionTypes.SET_DATA:
      return feAdapter.addAll(action.payload, {
        ...state
      });
    default:
      return state;
  }
}

const feFeatureState = createFeatureSelector<FeState>('fes');

export const getSelectedFE = createSelector(
  feFeatureState,
  (state: FeState) => state.selectedFE
);

export const getCurrentFE = createSelector(
  feFeatureState,
  getSelectedFE,
  (state: FeState) => state.entities[state.selectedFE]
);
