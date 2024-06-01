export class Criatura{
    #vida=100;
    #vidaMaxima=500;
    #ataque=10;
    constructor(){
        if (new.target === Criatura) {
            throw new Error("Cannot instantiate an abstract class.");
        }
        this.setNombre=undefined;
    }
    set setNombre(nom="Jhon"){
        this.nombre = nom;
    }
    set setVida(puntos){
        this.#vida += puntos;
    }
    set setAtaque(puntos){
        this.#ataque += puntos;
    }
    get getAtaque(){
        return this.#ataque;
    }
    get getVida(){
        return this.#vida;
    }
    get getVidamaxima(){
        return this.#vidaMaxima;
    }
}