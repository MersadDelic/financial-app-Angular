import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetdetailsComponent } from './budgetdetails.component';

describe('BudgetdetailsComponent', () => {
  let component: BudgetdetailsComponent;
  let fixture: ComponentFixture<BudgetdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
