import { Component, EventEmitter, OnInit } from '@angular/core';

import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public horrorscope: string;

  constructor(
    private _apiService: ApiService,
  ) {}

  public ngOnInit(): void {

  }

  public newSelection(sign: string): void {
    this.horrorscope = undefined;
    console.dir('app', sign);
    this._apiService.getHorror(sign).subscribe((h: string) => {
      this.horrorscope = h;
    });
  }
}
