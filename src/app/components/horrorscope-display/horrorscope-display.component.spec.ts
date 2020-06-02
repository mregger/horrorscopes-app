import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorrorscopeDisplayComponent } from './horrorscope-display.component';

describe('HorrorscopeDisplayComponent', () => {
  let component: HorrorscopeDisplayComponent;
  let fixture: ComponentFixture<HorrorscopeDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorrorscopeDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorrorscopeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
