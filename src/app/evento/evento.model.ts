export class Evento{
   
    public nombre:string ;
    public descripcion: string;
    public fecha: Date;
    public estado:string;
    
    
    constructor( descripcion: string,nombre:string, fecha: Date ,estado:string ) {
    this.descripcion = descripcion;
    this.nombre = nombre;
    this.fecha= fecha;
    this.estado=estado;
    }
    }