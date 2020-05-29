import {createReducer, on} from '@ngrx/store';
import {create, remove, edit, toggle, toggleAll, clearComplete} from './app.actions';
import {Evento} from './evento/evento.model';
import {Router} from '@angular/router';


export const initialState: Evento[] = [];
 
const _eventoReducer = createReducer(initialState,
 on(create, (state, {descripcion,estado,nombre,fecha}) => [...state, 
    new Evento( descripcion,estado,fecha,nombre)]),
 
 on(toggle, (state, { nombre }) => {
 return state.map( eventos => {
 if ( eventos.nombre === nombre ) {
 return {
 ...eventos,
 descripcion: !eventos.descripcion
 
 };
 } else {
 return eventos;
 }
 });
 }),
 
 on(edit, (state, { nombre, descripcion }) => {
 return state.map( eventos => {
 if ( eventos.nombre === nombre ) {
 return {
 ...eventos,
 descripcion
 };
 } else {
 return eventos;
 }
 });
 }),
 
 on(remove, (state, { nombre }) => state.filter( eventos => eventos.nombre !== nombre )),
 
 on(toggleAll, (state, { descripcion }) => {
 return state.map( eventos => {
 return {
 ...eventos,
 descripcion
 };
 });
 }),
 
 on(clearComplete, (state) => state.filter( eventos => !eventos.descripcion )),
);
 
export function eventoReducer( state, action ) {
 return _eventoReducer(state, action);
}