import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeLivreComponent } from './liste-livre.component';

describe('ListeLivreComponent', () => {
  let component: ListeLivreComponent;
  let fixture: ComponentFixture<ListeLivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeLivreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
