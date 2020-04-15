import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDashBoardComponent } from './patient-dash-board.component';

describe('PatientDashBoardComponent', () => {
  let component: PatientDashBoardComponent;
  let fixture: ComponentFixture<PatientDashBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientDashBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
