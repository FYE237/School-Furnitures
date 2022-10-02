import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeLivreAttenteComponent } from './liste-livre-attente.component';

describe('ListeLivreAttenteComponent', () => {
  let component: ListeLivreAttenteComponent;
  let fixture: ComponentFixture<ListeLivreAttenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeLivreAttenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeLivreAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
