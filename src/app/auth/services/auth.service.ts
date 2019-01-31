import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import * as uuid4 from 'uuid/v4';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  login(username: string, password: string): Observable<string> {
    if (username === password) {
      return of(uuid4());
    }
    return throwError('Invalid username or password');
  }

  logout(): Observable<boolean> {
    return of(true);
  }
}
