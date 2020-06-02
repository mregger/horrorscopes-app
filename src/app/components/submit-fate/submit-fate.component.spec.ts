import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitFateComponent } from './submit-fate.component';

describe('SubmitFateComponent', () => {
  let component: SubmitFateComponent;
  let fixture: ComponentFixture<SubmitFateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitFateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitFateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
