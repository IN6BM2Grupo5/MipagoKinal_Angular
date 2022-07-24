import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentoMarbeteComponent } from './documento-marbete.component';

describe('DocumentoMarbeteComponent', () => {
  let component: DocumentoMarbeteComponent;
  let fixture: ComponentFixture<DocumentoMarbeteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentoMarbeteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentoMarbeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
