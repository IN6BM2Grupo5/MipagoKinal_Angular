import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioCafeteriaComponent } from './usuario-cafeteria.component';

describe('UsuarioCafeteriaComponent', () => {
  let component: UsuarioCafeteriaComponent;
  let fixture: ComponentFixture<UsuarioCafeteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioCafeteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioCafeteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
