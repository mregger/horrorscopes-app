import { Component, EventEmitter, OnInit } from '@angular/core';

import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public horrorscope: string;
  public resultsArrived: boolean = false;

  constructor(
    private _apiService: ApiService,
  ) {}

  public ngOnInit(): void {

  }

  public newSelection(sign: string): void {
    this.horrorscope = undefined;
    console.dir('app', sign);
    this._apiService.getHorror(sign).subscribe(h => {
      console.log(h.fate);
      console.log('balls on fire');
      this.horrorscope = h.fate;
      this.resultsArrived = true;
    });
  }

  public onSubmit(submission: any): void {
    console.dir(submission);
    this._apiService.putData(submission).subscribe(x => {
      console.dir(x)
    })
  }
}
