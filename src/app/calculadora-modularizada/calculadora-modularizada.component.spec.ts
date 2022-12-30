import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraModularizadaComponent } from './calculadora-modularizada.component';

describe('CalculadoraModularizadaComponent', () => {
  let component: CalculadoraModularizadaComponent;
  let fixture: ComponentFixture<CalculadoraModularizadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraModularizadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraModularizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
