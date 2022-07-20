import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAppUsuariosComponent } from './admin-app-usuarios.component';

describe('AdminAppUsuariosComponent', () => {
  let component: AdminAppUsuariosComponent;
  let fixture: ComponentFixture<AdminAppUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAppUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAppUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
