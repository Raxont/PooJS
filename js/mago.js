import {Character} from './personaje.js';
export class Mage extends Character{
    #capa=true;
    #botas=true;
    #gorro=true;
    #arma=true;
    #anino=true;
    constructor(nom){
        super();//Trae los metodos de la clase padre
        this.setNombre=nom;
        this.setVida=5;
        this.armadura();
    }
    armadura(){
        if (this.#capa) this.setDefensa=5;
        if (this.#botas) this.setDefensa=2;
        if (this.#gorro) this.setDefensa=2;
        if (this.#arma) this.setDano=11;
        if (this.#anino) this.setDano=10;
    }
    atacar(oponente) {
        super.atacar(oponente);
    }
}