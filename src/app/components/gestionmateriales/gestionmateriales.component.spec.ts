import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionmaterialesComponent } from './gestionmateriales.component';

describe('GestionmaterialesComponent', () => {
  let component: GestionmaterialesComponent;
  let fixture: ComponentFixture<GestionmaterialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionmaterialesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionmaterialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
