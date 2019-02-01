import { Action, FeActionTypes } from './fe.actions';
import { TripDetails } from '../models/trip-details';

export interface FeState {
  selectedFE: string;
  tripDetails: TripDetails[];
}

const initialState: FeState = {
  selectedFE: null,
  tripDetails: null
};

export function feReducer(state = initialState, action: Action) {
  switch (action.type) {
    case FeActionTypes.SET_FE:
      return {
        ...state,
        selectedFE: action.payload
      };
    case FeActionTypes.SET_DATA:
      return {
        ...state,
        tripDetails: action.payload
      };
    default:
      return state;
  }
}
