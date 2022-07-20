import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioAdminappComponent } from './inicio-adminapp.component';

describe('InicioAdminappComponent', () => {
  let component: InicioAdminappComponent;
  let fixture: ComponentFixture<InicioAdminappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioAdminappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioAdminappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
