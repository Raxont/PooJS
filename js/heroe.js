import {Criatura} from "./criatura.js"
import {Item} from "./item.js"

export class Heroe extends Criatura{
    constructor(){
        super();
        this.setVida=60;
        this.setAtaque=10;
        this.inventario=[];//Se crea un inventario para el Heroe
    }
    utilizarItem(item){
        if(this.inventario.incluedes(item)){ //Se asegura si existe ese item en el inventario
            item.utilizar(this); //Se llama al metodo utilizar de items.js
            this.eliminarItem(item); //Se llama al metodo eliminarItem de este mismo archivo
        }else {
            console.log("El héroe no tiene ese ítem en su inventario.");
        }
    }
    eliminarItem(item) {
        const index = this.inventario.indexOf(item); //Encuentra el index del item del inventario 
        if (index !== -1) { //Si no existe envia -1 por lo que no entra al iff
            this.inventario.splice(index, 1); //Toma el index del inventario y elimina la cantidad de items deseados
            console.log(`${item.nombre} ha sido eliminado del inventario.`);
        }
    }
}