import { Item } from "./item.js";

export class Pocion extends Item {
    constructor(nombre) {
        super(nombre); 
    }
    utilizar(objetivo) {
        objetivo.setVida += 80; // Aumentar la vida del objetivo en 80 puntos
        console.log(`${this.nombre} ha sido utilizado en ${objetivo.nombre}.`);
    }
}