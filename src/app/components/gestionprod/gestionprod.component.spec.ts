import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionprodComponent } from './gestionprod.component';

describe('GestionprodComponent', () => {
  let component: GestionprodComponent;
  let fixture: ComponentFixture<GestionprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionprodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
