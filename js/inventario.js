export class Inventario {
    constructor() {
        this.items = [];
    }

    agregarItem(item) {
        this.items.push(item); //Guarda en la lista items el item dado
    }

    utilizarItem(item,objetivo){
        
        if (this.items.includes(item)) { //Se asegura si existe ese item en el inventario
            item.utilizar(objetivo);; //Se llama al metodo utilizar de items.js
            this.removerItem(item); //Se llama al metodo eliminarItem de este mismo archivo
        }else {
            console.log("El item no esta en el inventario.");
        }
    }

    removerItem(item) {
        const index = this.items.indexOf(item); //Encuentra el index del item del inventario 
        if (index !== -1) { //Si no existe envia -1 por lo que no entra al iff
            this.items.splice(index, 1); //Toma el index del inventario y elimina la cantidad de items deseados
            console.log(`${item.nombre} ha sido eliminado del inventario.`);
        }
    }
    imprimirLista() {
        console.log("Inventario:"); 
        this.items.forEach(item => { //Se muestra cada item del inventario disponible
            console.log(item.nombre);
        });
    }
}