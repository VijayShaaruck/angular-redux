import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TripDetails, FE } from '../models/fe.model';

@Injectable({
  providedIn: 'root'
})
export class FeService {
  constructor() {}

  loadFEs(): Observable<FE[]> {
    return of([
      new FE('001', [
        new TripDetails('', ''),
        new TripDetails('', ''),
        new TripDetails('', '')
      ]),
      new FE('002', [
        new TripDetails('', ''),
        new TripDetails('', ''),
        new TripDetails('', '')
      ]),
      new FE('003', [
        new TripDetails('', ''),
        new TripDetails('', ''),
        new TripDetails('', '')
      ])
    ]);
  }
}
