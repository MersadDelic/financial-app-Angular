import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BeneficiaryComponent} from './beneficiary.component';

describe('UserComponent', () => {
  let component: BeneficiaryComponent;
  let fixture: ComponentFixture<BeneficiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BeneficiaryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
