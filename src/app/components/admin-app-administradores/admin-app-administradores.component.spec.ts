import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAppAdministradoresComponent } from './admin-app-administradores.component';

describe('AdminAppAdministradoresComponent', () => {
  let component: AdminAppAdministradoresComponent;
  let fixture: ComponentFixture<AdminAppAdministradoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAppAdministradoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAppAdministradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
