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
        new TripDetails('1000000000000', 'AAA'),
        new TripDetails('2000000000000', 'BBB'),
        new TripDetails('3000000000000', 'CCC')
      ]),
      new FE('002', [
        new TripDetails('4000000000000', 'MMM'),
        new TripDetails('5000000000000', 'NNN'),
        new TripDetails('6000000000000', 'OOO')
      ]),
      new FE('003', [
        new TripDetails('7000000000000', 'PPP'),
        new TripDetails('8000000000000', 'QQQ'),
        new TripDetails('9000000000000', 'RRR')
      ])
    ]);
  }
}
