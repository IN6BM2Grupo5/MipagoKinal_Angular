import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeteriaPedidosComponent } from './cafeteria-pedidos.component';

describe('CafeteriaPedidosComponent', () => {
  let component: CafeteriaPedidosComponent;
  let fixture: ComponentFixture<CafeteriaPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CafeteriaPedidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeteriaPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
