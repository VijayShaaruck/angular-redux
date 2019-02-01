import { Action, FeActionTypes } from './fe.actions';
import { TripDetails } from '../models/trip-details';

export interface FeState {
  tripDetails: TripDetails[];
}

const initialState: FeState = {
  tripDetails: []
};

export function feReducer(state = initialState, action: Action) {
  switch (action.type) {
    case FeActionTypes.SET_DATA:
      return {
        ...state,
        tripDetails: action.payload
      };
    default:
      return state;
  }
}
