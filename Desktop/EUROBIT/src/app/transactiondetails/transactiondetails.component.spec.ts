import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactiondetailsComponent } from './transactiondetails.component';

describe('TransactiondetailsComponent', () => {
  let component: TransactiondetailsComponent;
  let fixture: ComponentFixture<TransactiondetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactiondetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactiondetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
