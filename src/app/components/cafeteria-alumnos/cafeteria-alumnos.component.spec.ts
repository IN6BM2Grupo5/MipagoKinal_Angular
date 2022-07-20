import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeteriaAlumnosComponent } from './cafeteria-alumnos.component';

describe('CafeteriaAlumnosComponent', () => {
  let component: CafeteriaAlumnosComponent;
  let fixture: ComponentFixture<CafeteriaAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CafeteriaAlumnosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeteriaAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
