import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionsAndSymptomsComponent } from './conditions-and-symptoms.component';

describe('ConditionsAndSymptomsComponent', () => {
  let component: ConditionsAndSymptomsComponent;
  let fixture: ComponentFixture<ConditionsAndSymptomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionsAndSymptomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionsAndSymptomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
