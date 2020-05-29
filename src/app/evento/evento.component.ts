import { Component, OnInit } from '@angular/core';

import {Store} from '@ngrx/store';
import * as actions from '../app.actions';
import {Evento} from '../evento/evento.model';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
