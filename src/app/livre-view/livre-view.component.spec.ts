import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreViewComponent } from './livre-view.component';

describe('LivreViewComponent', () => {
  let component: LivreViewComponent;
  let fixture: ComponentFixture<LivreViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivreViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivreViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
