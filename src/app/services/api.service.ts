import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  public getHorror(sign: string): Observable<string> {
    let c = 'balls'
    let b = 'boobs'
    return sign === 'capricorn' ? of(b) : of(c);
  }
}
