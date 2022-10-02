import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTransactionComponent } from './liste-transaction.component';

describe('ListeTransactionComponent', () => {
  let component: ListeTransactionComponent;
  let fixture: ComponentFixture<ListeTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
