import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioCarritoCafeteriaComponent } from './usuario-carrito-cafeteria.component';

describe('UsuarioCarritoCafeteriaComponent', () => {
  let component: UsuarioCarritoCafeteriaComponent;
  let fixture: ComponentFixture<UsuarioCarritoCafeteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioCarritoCafeteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioCarritoCafeteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
