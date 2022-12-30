import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEjerciciosRepetidorPalabraComponent } from './app-ejercicios-repetidor-palabra.component';

describe('AppEjerciciosRepetidorPalabraComponent', () => {
  let component: AppEjerciciosRepetidorPalabraComponent;
  let fixture: ComponentFixture<AppEjerciciosRepetidorPalabraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppEjerciciosRepetidorPalabraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppEjerciciosRepetidorPalabraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
