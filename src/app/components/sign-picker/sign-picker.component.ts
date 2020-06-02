import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-picker',
  templateUrl: './sign-picker.component.html',
  styleUrls: ['./sign-picker.component.scss']
})
export class SignPickerComponent implements OnInit {

  @Output() public onSelection = new EventEmitter<string>();

  constructor() { }

  public ngOnInit(): void {

  }

  public selected(sign: string): void {
    console.dir(sign);
    this.onSelection.emit(sign)
  }
}
