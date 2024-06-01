import {Character} from "./personaje.js";
import {Warrior} from "./guerrero.js";
import {Mage} from "./mago.js";

let warrior;
let mage;
document.getElementById('crear_guerrero').addEventListener('click', () => {
    const name = prompt("Ingrese el nombre del guerrero:");
    if (name) {
        warrior = new Warrior(name);
        alert(`Guerrero creado: ${warrior.nombre}`);
        console.log(warrior);
    } else {
        alert('Creacion del guerrero cancelado.');
    }
});

document.getElementById('crear_mago').addEventListener('click', () => {
    const name = prompt("Ingrese el nombre del mago:");
    if (name) {
        mage = new Mage(name);
        alert(`Mago creado: ${mage.nombre}`);
        console.log(mage);
    } else {
        alert('Creacion del mago cancelado.');
    }
});

document.getElementById('atacar').addEventListener('click', () => {
    if (warrior && mage) {
        if (warrior.getVida > 0 && mage.getVida > 0) {
            warrior.atacar(mage);
            if (mage.getVida > 0) {
                mage.atacar(warrior);
            }
            console.log(warrior);
            console.log(mage);
        } else {
            alert('Uno de los personajes ya ha sido derrotado. No pueden seguir atacando.');
        }
    } else {
        alert('Asegúrate de crear ambos personajes antes de atacar.');
    }
});