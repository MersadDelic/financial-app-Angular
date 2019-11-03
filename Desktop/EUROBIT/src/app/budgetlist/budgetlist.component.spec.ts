import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetlistComponent } from './budgetlist.component';

describe('BudgetlistComponent', () => {
  let component: BudgetlistComponent;
  let fixture: ComponentFixture<BudgetlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
