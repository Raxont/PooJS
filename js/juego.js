import { Orco, Globin, Kobolt } from "./mostruo.js";
import { Combate } from "./combate.js";
import { Pocion } from "./pocion_vida.js";

export class Juego{
    constructor(){
        this.historial = [];
        this.heroe = new Heroe();
        this.mostruo = null;
        this.combate = new Combate();
        this.juegoTerminado = false;
    }
    
    loguear(mensaje){
        this.historial.push(mensaje);
        console.log(mensaje);
    }

    ejecutar(accion, objetivo){
        if(this.juegoTerminado){
            this.loguear("No puede realizar acciones estando muerto...");
            return;
        }
        switch (accion) {
            case 'atacar':
                this.atacar(objetivo);
                break;
            case 'investigar':
                this.investigar();
                break;
            case 'utilizarItem':
                this.utilizarItem(objetivo);
                break;
            case 'reiniciar':
                this.reiniciar();
                break;
            default:
                this.loguear("Acción no reconocida.");
        }
        this.verificarJuego();
    }
    verificarJuego(){
        if(this.heroe.getVida<=0){
            this.juegoTerminado=true;
            this.loguear("¡Has muerto!");
        }
    }
    investigar(){
        if (this.mostruo && this.mostruo.getVida > 0) {
            this.loguear("No puedes investigar mientras este vivo el mostruo.");
            return;
        }
        const mostruos=[Orco, Globin, Kobolt];
        const indiceAleatorio = Math.floor(Math.random() * mostruos.length);
        const mostruoAleatorio = mostruos[indiceAleatorio];
        this.mostruo= new mostruoAleatorio();
        this.loguear(`Un ${this.mostruo.constructor.name} ha aparecido!`);
    }
    utilizarItem(objetivo) {
        this.heroe.utilizarItem(objetivo);
    }

    atacar(oponente) {
        if (!this.mostruo || this.mostruo.getVida <= 0) {
            this.loguear("No puede atacar sin un mostruo válido o si el mostruo actual no tiene vida.");
            return;
        }
        this.combate.atacar(this.mostruo, oponente);
    }

    reiniciar(){
        this.heroe.setVida = this.heroe.getVida;
        this.mostruo = null;
        this.juegoTerminado = false;
        this.loguear("El juego ha sido reiniciado satisfactoriamente.");
    }
}