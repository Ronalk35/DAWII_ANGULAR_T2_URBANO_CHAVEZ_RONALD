import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoMatriculaComponent } from './calculo-matricula.component';

describe('CalculoMatriculaComponent', () => {
  let component: CalculoMatriculaComponent;
  let fixture: ComponentFixture<CalculoMatriculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculoMatriculaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculoMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
