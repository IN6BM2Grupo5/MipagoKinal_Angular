import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeteriaProductosComponent } from './cafeteria-productos.component';

describe('CafeteriaProductosComponent', () => {
  let component: CafeteriaProductosComponent;
  let fixture: ComponentFixture<CafeteriaProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CafeteriaProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeteriaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
