export class Character{
    #vida=20;
    #defensa=5;
    #dano=5;
;    constructor(){
        if (new.target === Character) {
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
    set setDefensa(puntos){
        this.#defensa += puntos;
    }
    set setDano(puntos){
        this.#dano += puntos;
    }
    get getDano(){
        return this.#dano;
    }
    get getDefensa(){
        return this.#defensa;
    }
    get getVida(){
        return this.#vida;
    }

    atacar(oponente) {
        const danoReal = this.getDano - oponente.getDefensa;
        if (danoReal > 0) {
            oponente.setVida = -danoReal;
            console.log(`${this.nombre} ataca a ${oponente.nombre} y le hace ${danoReal} puntos de daño.`);
            if(oponente.getVida<=0){
                console.log(`${oponente.nombre} ha sido derrotado.`);
                return;  
            }
        } else {
            console.log(`${this.nombre} no puede hacer daño a ${oponente.nombre} debido a su alta defensa.`);
        }
    }
}