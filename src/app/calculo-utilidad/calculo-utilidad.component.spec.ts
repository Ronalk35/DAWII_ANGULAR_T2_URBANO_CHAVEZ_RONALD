import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoUtilidadComponent } from './calculo-utilidad.component';

describe('CalculoUtilidadComponent', () => {
  let component: CalculoUtilidadComponent;
  let fixture: ComponentFixture<CalculoUtilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculoUtilidadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculoUtilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
