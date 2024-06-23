import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcoholemiaComponent } from './alcoholemia.component';

describe('AlcoholemiaComponent', () => {
  let component: AlcoholemiaComponent;
  let fixture: ComponentFixture<AlcoholemiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlcoholemiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlcoholemiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
