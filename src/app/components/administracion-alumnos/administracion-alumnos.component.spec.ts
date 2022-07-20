import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionAlumnosComponent } from './administracion-alumnos.component';

describe('AdministracionAlumnosComponent', () => {
  let component: AdministracionAlumnosComponent;
  let fixture: ComponentFixture<AdministracionAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministracionAlumnosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
