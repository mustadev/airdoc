import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAppoitmentsComponent } from './patient-appoitments.component';

describe('PatientAppoitmentsComponent', () => {
  let component: PatientAppoitmentsComponent;
  let fixture: ComponentFixture<PatientAppoitmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientAppoitmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientAppoitmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
