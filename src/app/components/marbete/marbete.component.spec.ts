import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarbeteComponent } from './marbete.component';

describe('MarbeteComponent', () => {
  let component: MarbeteComponent;
  let fixture: ComponentFixture<MarbeteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarbeteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarbeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
