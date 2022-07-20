import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionMarbetesComponent } from './administracion-marbetes.component';

describe('AdministracionMarbetesComponent', () => {
  let component: AdministracionMarbetesComponent;
  let fixture: ComponentFixture<AdministracionMarbetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministracionMarbetesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionMarbetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
