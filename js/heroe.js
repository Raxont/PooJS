import {Criatura} from "./criatura.js"
import { Inventario } from "./inventario.js";

export class Heroe extends Criatura{
    constructor(){
        super();
        this.setVida=60;
        this.setAtaque=10;
        this.descansado = true; // Comienza descansado
        this.inventario = new Inventario();;
    }
    descansar() {
        if (!this.descansado) {
            this.setVida = 20; // Aumenta la vida al descansar
            this.descansado = true; // Esta descansado
            console.log("El héroe ha descansado y ha recuperado 20 puntos de vida.");
        } else {
            console.log("El heroe ya esta descansado, no puede descansar nuevamente.");
        }
    }
    cansar() {
        this.descansado = false; // El heroe se cansa cuando es atacado
    }
}