import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentOrProceduresComponent } from './treatment-or-procedures.component';

describe('TreatmentOrProceduresComponent', () => {
  let component: TreatmentOrProceduresComponent;
  let fixture: ComponentFixture<TreatmentOrProceduresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreatmentOrProceduresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentOrProceduresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
