import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioListaPersonasComponent } from './ejercicio-lista-personas.component';

describe('EjercicioListaPersonasComponent', () => {
  let component: EjercicioListaPersonasComponent;
  let fixture: ComponentFixture<EjercicioListaPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjercicioListaPersonasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjercicioListaPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
