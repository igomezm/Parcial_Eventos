import {createAction, props} from '@ngrx/store';
 
export const create = createAction(
 '[EVENTO] Create evento',
 props<{ descripcion: string, estado:string, nombre:string, fecha:Date}>()
);
 
export const toggle = createAction(
 '[EVENTO] Toggle evento',
 props<{ nombre: string  }>()
);
 
export const edit = createAction(
 '[EVENTO] Edit evento',
 props<{ nombre: string, descripcion: string }>()
);
 
export const remove = createAction(
 '[TODO] Remove evento',
 props<{ nombre: string }>()
);
 
export const toggleAll = createAction(
 '[EVENTO] Toggle All evento ',
 props<{ descripcion: string }>()
);
 
export const clearComplete = createAction('[TODO] Clear Complete todo');