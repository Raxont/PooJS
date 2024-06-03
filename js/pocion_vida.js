import { Item } from "./item.js";

export class Pocion {
    constructor(nombre) {
        this.nombre = nombre;
    }
    utilizar(heroe) {
        heroe.setVida =  80; // Aumenta la vida del héroe en 80 puntos
        console.log(`${heroe.nombre} ha utilizado una ${this.nombre} y ha recuperado 80 puntos de vida.`);
    }
}