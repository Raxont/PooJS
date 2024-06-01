export class Item {
    constructor(nombre){
        this.nombre=nombre //Se guarda el nombre del item
    }
    utilizar(objetivo){
        objetivo.setVida=80; //Se aumenta la vida del heroe 80 puntos
        console.log(`${this.nombre} ha sido utilizado en ${objetivo.nombre}.`);
    }
}