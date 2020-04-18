import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAppoitmentComponent } from './patient-appoitment.component';

describe('PatientAppoitmentComponent', () => {
  let component: PatientAppoitmentComponent;
  let fixture: ComponentFixture<PatientAppoitmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientAppoitmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientAppoitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
