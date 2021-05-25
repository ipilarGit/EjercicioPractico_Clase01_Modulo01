// Crear una clase Persona que extienda de otra clase llamada SerVivo
// Agregar metodo caminar a SerVivo
// Agregar constructor a Persona que reciba el nombre de la persona
// Agregar metodo moverse a la clase Persona que llame al metodo caminar de la clase SerVivo y que muestre el mensaje Ahora esta caminando: Juanito

class SerVivo {

    static caminar(nombre) {
        console.log(`Ahora esta caminando:  ${nombre}`);
    }
}


class Persona extends SerVivo {

    constructor(nombre){
        this.nombre = nombre;
    }

    static moverse(nombre){
       this.caminar(nombre)
    }
}

Persona.moverse('juanito');
// Ahora esta caminando:  juanito