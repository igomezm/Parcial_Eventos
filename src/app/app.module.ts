import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { EditarComponent } from './editar/editar.component';
import { RegistrarComponent} from './registrar/registrar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { StoreModule } from '@ngrx/store';
import {MatInputModule} from '@angular/material/input';
import { NgModel, FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { Routes } from '@angular/router';
import { EventoComponent } from "./evento/evento.component";


export const routes: Routes = [
  {path: '', redirectTo:"registrar", pathMatch: 'full'},
  {path: 'eventos', component: EventoComponent, pathMatch: 'full'},
  {path: 'edit', component: EditarComponent, pathMatch: 'full'},
  
 ];

@NgModule({
  declarations: [
    AppComponent,
    EditarComponent,
    RegistrarComponent,
    EventoComponent
  ],
  imports: [
    MatNativeDateModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
