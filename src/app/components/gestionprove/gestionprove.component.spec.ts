import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionproveComponent } from './gestionprove.component';

describe('GestionproveComponent', () => {
  let component: GestionproveComponent;
  let fixture: ComponentFixture<GestionproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionproveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
