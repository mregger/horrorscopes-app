import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-horrorscope-display',
  templateUrl: './horrorscope-display.component.html',
  styleUrls: ['./horrorscope-display.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ]),
  ],
})
export class HorrorscopeDisplayComponent implements OnInit {

  @Input() public fate: string;
  @Input() public loading: boolean;

  constructor() { }

  ngOnInit() {
  }

}
