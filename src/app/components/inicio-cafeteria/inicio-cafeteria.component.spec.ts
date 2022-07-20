import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioCafeteriaComponent } from './inicio-cafeteria.component';

describe('InicioCafeteriaComponent', () => {
  let component: InicioCafeteriaComponent;
  let fixture: ComponentFixture<InicioCafeteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioCafeteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioCafeteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
