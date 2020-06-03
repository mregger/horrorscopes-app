import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  public getHorror(sign: string): Observable<string> {
    const url: string = 'https://us-central1-my-horrorscopes.cloudfunctions.net/get-data?sign=' + sign;
    return this._http.get<string>(url);
  }
}
