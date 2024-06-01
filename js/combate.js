export class Combate {
    static atacar(atacante, oponente) {
        if (oponente.getVida > 0) {
            oponente.setVida = -atacante.getAtaque;
            console.log(`${atacante.nombre} ataca a ${oponente.nombre} y le hace ${atacante.getAtaque} puntos de daño.`);
            if (oponente.getVida <= 0) {
                console.log(`${oponente.nombre} ha sido derrotado.`);
            }
        } else {
            console.log(`${oponente.nombre} ya está derrotado.`);
        }
    }
}