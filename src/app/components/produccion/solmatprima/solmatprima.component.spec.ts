import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolmatprimaComponent } from './solmatprima.component';

describe('SolmatprimaComponent', () => {
  let component: SolmatprimaComponent;
  let fixture: ComponentFixture<SolmatprimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolmatprimaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolmatprimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
