import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { animalesComponent } from './animales/animales.component';

import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { PersonaComponent } from './persona/persona.component';
import { AppEjerciciosRepetidorPalabraComponent } from './app-ejercicios-repetidor-palabra/app-ejercicios-repetidor-palabra.component';
import { FormsModule } from '@angular/forms';
import { EjercicioCalculadoraComponent } from './ejercicio-calculadora/ejercicio-calculadora.component';
import { EjercicioListaPersonasComponent } from './ejercicio-lista-personas/ejercicio-lista-personas.component';
import { PersonaDetalleComponent } from './persona-detalle/persona-detalle.component';
import { FormularioComponent } from './formulario/formulario.component';
import { CalculadoraModularizadaComponent } from './calculadora-modularizada/calculadora-modularizada.component';
import { FormularioCalculadoraComponent } from './formulario-calculadora/formulario-calculadora.component';
import { CalculadoraResultadoComponent } from './calculadora-resultado/calculadora-resultado.component';
import { loggingService } from './LoggingService.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    animalesComponent,
    PersonaComponent,
    AppEjerciciosRepetidorPalabraComponent,
    EjercicioCalculadoraComponent,
    EjercicioListaPersonasComponent,
    PersonaDetalleComponent,
    FormularioComponent,
    CalculadoraModularizadaComponent,
    FormularioCalculadoraComponent,
    CalculadoraResultadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [loggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
