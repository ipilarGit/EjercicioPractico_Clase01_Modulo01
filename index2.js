// Crear una clase Persona que extienda de otra clase llamada SerVivo
// Agregar metodo caminar a SerVivo

class Persona {
    constructor(nombre){
        this.nombre = nombre;
    }

}

class SerVivo extends Persona {
    caminar(nombre) {
        console.log(`Ahora esta caminando:  ${nombre}`);
    }
}