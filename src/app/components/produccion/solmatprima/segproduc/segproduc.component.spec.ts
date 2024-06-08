import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegproducComponent } from './segproduc.component';

describe('SegproducComponent', () => {
  let component: SegproducComponent;
  let fixture: ComponentFixture<SegproducComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegproducComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SegproducComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
