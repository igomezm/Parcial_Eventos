import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Evento } from '../evento/evento.model';
import * as action from '../app.actions';



interface AppState{
  Evento: Evento[];
}
@Component({
  selector: 'app-registrar',
  templateUrl: './Registrar.component.html',
  styleUrls: ['./Registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  evento: Evento;
  router: any;

  constructor(private store: Store<AppState>) {

    this.evento={
      nombre: "",
      descripcion:"",
      fecha:null,
      estado:""
    }

   }
  
  ngOnInit(): void {
  }

  crearEvento(){
    console.log(this.evento);
   
    this.store.dispatch(action.create({descripcion:this.evento.descripcion,
                                        estado:this.evento.estado,
                                      nombre:this.evento.nombre,
                                      fecha: this.evento.fecha}));
    
    
  }
 

}
