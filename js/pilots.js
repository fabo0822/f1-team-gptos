import { pilotos } from "./data.js";
export class piloto extends pilotos{
    static id = 0;
    constructor(id, nombre, equipo, rol){
    super();
    this._id =++piloto.id;
    this._nombre= nombre;
    this._equipo= equipo;
    this._rol =rol;    
    }
    get id(){
        return this._id;
    }
    get nombre(){
        return this._nombre
    }
    get equipo(){
        return this._equipo
    }
    get rol(){
        return this._rol
    }
    set rol (v_rol){
        this._rol =v_rol
    }
}




