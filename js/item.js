export class Item {
    constructor(nombre){
        this.nombre=nombre //Se guarda el nombre del item
    }
    utilizar(objetivo){
        console.log(`${this.nombre} ha sido utilizado en ${objetivo.nombre}.`);
    }
}