import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefferedPharmacyComponent } from './preffered-pharmacy.component';

describe('PrefferedPharmacyComponent', () => {
  let component: PrefferedPharmacyComponent;
  let fixture: ComponentFixture<PrefferedPharmacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrefferedPharmacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrefferedPharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
