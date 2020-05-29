import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { EditarComponent } from './editar/editar.component';
import { RegistrarComponent} from './registrar/registrar.component';
import { EventoComponent } from './evento/evento.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    EditarComponent,
    RegistrarComponent,
    EventoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatFormFieldModule,
    MatCardModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
