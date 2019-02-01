import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TripDetails } from '../models/trip-details';

@Injectable({
  providedIn: 'root'
})
export class FeService {
  constructor() {}

  getTripDetails(fe: string): Observable<TripDetails[]> {
    return of([
      new TripDetails('', '', '', '', '', '', '', '', '', '', '', ''),
      new TripDetails('', '', '', '', '', '', '', '', '', '', '', ''),
      new TripDetails('', '', '', '', '', '', '', '', '', '', '', ''),
      new TripDetails('', '', '', '', '', '', '', '', '', '', '', ''),
      new TripDetails('', '', '', '', '', '', '', '', '', '', '', '')
    ]);
  }
}
