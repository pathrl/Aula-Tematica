function saluda(nombre) {
  console.log('Te digo Hola');
  console.log(`Me llamo ${nombre}`);
  console.log('Te digo Adios');
}

saluda('Patricia');
saluda('Paco');
saluda('Jose');
saluda('Zap');


 function Animal() {
   this.nombre;
   this.edad = 0;

   this.comer = function() {
     return 'Animal comiendo...';
   }
 }

 Perro.prototype = new Animal();
 function Perro() {
  //Metodos
  this.ladrar = function() {
    return 'guau';
  };
}

 Persona.prototype = new Animal();
 function Persona() {
  //Metodos
  this.saludar = function() {
    return 'hola';
  };
 }

 Bombero.prototype = new Persona();
 function Bombero() {
   this.apagaFuego = function() {
     return 'Apagando fuego...';
   }
 }

let persona1 = new Persona(); //Nace una nueva persona
persona1.nombre = 'Pedro'; //Le pongo un nombre al nacer
console.log(persona1.nombre, persona1.edad); //LLamo a su propiedad nombre y edad
console.log(persona1.saludar());
console.log(persona1.comer());

let perro1 = new Perro();
perro1.nombre = 'Maggie';
console.log(perro1.nombre, perro1.edad);
console.log(perro1.ladrar());
console.log(perro1.comer());

let bombero1 = new Bombero();
bombero1.nombre = 'Pepe';
console.log(bombero1.nombre, bombero1.edad);
console.log(bombero1.saludar());
console.log(bombero1.apagaFuego());
