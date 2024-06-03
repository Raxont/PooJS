import { Orco, Globin, Kobolt } from "./mostruo.js";
import {Heroe} from "./heroe.js"

export class Combate {
    comenzarCombate(heroe, monstruo) {
        while (heroe.getVida > 0 && monstruo.getVida > 0) {
            this.atacar(heroe, monstruo);
            if (monstruo.getVida > 0) {
                this.atacar(monstruo, heroe);
            }
        }
        if (heroe.getVida <= 0) {
            console.log(`${heroe.nombre} ha sido derrotado.`);
        } else {
            console.log(`${monstruo.nombre} ha sido derrotado.`);
        }
    }

    atacar(atacante, objetivo) {
        const dano = atacante.getAtaque;
        objetivo.setVida=-dano;
        if (objetivo instanceof Heroe) { // Se verifica que el objetivo sea una instancia llamada Heroe
            objetivo.cansar();
        }
    }
}