import {Character} from './personaje.js';

export class Warrior extends Character{
    #pechera=true;
    #casco=true;
    #botas=true;
    #arma=true;
    #escudo=true;
    constructor(nom){
        super();//Trae los metodos de la clase padre
        this.setNombre=nom;
        this.setVida=10;
        this.armadura();
    }
    armadura(){
        if (this.#pechera) this.setDefensa=8;
        if (this.#casco) this.setDefensa=5;
        if (this.#botas) this.setDefensa=4;
        if (this.#escudo) this.setDefensa=2;
        if (this.#arma) this.setDano=10;
    }
    atacar(oponente) {
        super.atacar(oponente)
    }
}

