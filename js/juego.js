import { Area } from "./area.js";
import { Combate } from "./combate.js";
import { Heroe } from "./heroe.js";

export class Juego{
    constructor(){
        this.historial = []; // Se guarda el historial del juego
        this.heroe = new Heroe();
        this.combate = new Combate();
        this.juegoTerminado = false; // El juego aun no ha terminado
        this.areas = [new Area(), new Area(), new Area(),new Area(), new Area(), new Area(),new Area(), new Area(), new Area()]; 
        this.areaActual = null; // Empieza sin un area actual
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
            case 'moverse':
                this.moverse();
                break;
            case 'investigar':
                this.investigar();
                break;
            case 'descansar':
                this.descansar();
                break;
            case 'utilizarItem':
                this.utilizarItem(objetivo);
                break;
            case 'verInventario':
                this.verInventario();
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

    investigar() {
        if (!this.areaActual) {
            this.loguear("No hay un área actual para investigar. ¡Muévete primero!");
            return;
        }
        const resultado = this.areaActual.investigar();
        this.loguear(resultado.mensaje);
    }

    verInventario() {
        this.heroe.inventario.imprimirLista();
    }

    utilizarItem(item) {
        this.heroe.inventario.utilizarItem(item, this.heroe);
    }

    atacar() {
        if (!this.areaActual.mostruo) {
            this.loguear("No hay monstruo para atacar.");
            return;
        }
        console.log("Vida de",this.heroe.nombre,":",this.heroe.getVida);
        console.log("Vida de",this.areaActual.mostruo.nombre,":",this.areaActual.mostruo.getVida);
        this.combate.comenzarCombate(this.heroe, this.areaActual.mostruo);
        console.log("Vida de",this.heroe.nombre,":",this.heroe.getVida);
        console.log("Vida de",this.areaActual.mostruo.nombre,":",this.areaActual.mostruo.getVida);
    }

    moverse() {
        const indiceAleatorio = Math.floor(Math.random() * this.areas.length); //Muy parecido al mostruo aleatorio solo que esto es para un area
        this.areaActual = this.areas[indiceAleatorio]; //Elige el area a moverse dependiendo del indice aleatorio encontrado
        this.loguear(`Te has movido a una nueva área.`);
    }

    descansar() {
        if (!this.areaActual) { //Busca si hay un area para descansar
            this.loguear("No hay un área actual para descansar.");
            return;
        }

        if (!this.areaActual.puedeDescansar()) { //Llama al metodo para ver si puede descansar en esa area
            this.loguear("No puedes descansar en esta área.");
            return;
        }
        this.heroe.descansar();
    }

    reiniciar(){
        this.heroe.setVida = this.heroe.getVida; // Se reinicia la vida del heroe
        this.mostruo = null; // Se elimina al oponente
        this.juegoTerminado = false; // Se reinicia la variable
        this.loguear("El juego ha sido reiniciado satisfactoriamente.");
    }
}
