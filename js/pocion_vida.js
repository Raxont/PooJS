import { Item } from "./item.js";

export class Pocion extends Item {
    utilizar(objetivo) {
        objetivo.setVida += 80; // Aumentar la vida del objetivo en 80 puntos
    }
}