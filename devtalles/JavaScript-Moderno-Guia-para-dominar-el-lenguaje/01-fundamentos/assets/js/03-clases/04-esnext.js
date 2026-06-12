class Rectangulo {
    
  base = 0;
  altura = 0;
  #area = 0; // Propiedad privada

    constructor( base = 0, altura = 0 ) {
        this.base = base;
        this.altura = altura;
        
        this.#area = base * altura;
    }

    #calcularArea() {
        return this.#area*2;
    }
}

const rectangulo = new Rectangulo( 10, 20 );

// rectangulo.#area = 100; // No se puede modificar el área directamente
console.log( rectangulo );  

rectangulo.#calcularArea(); // No se puede acceder al método privado
console.log( rectangulo );  
