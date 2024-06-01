import {Criatura} from "./criatura.js"

export class Heroe extends Criatura{
    constructor(){
        super();
        this.setVida=60;
        this.setAtaque=10;
    }
}