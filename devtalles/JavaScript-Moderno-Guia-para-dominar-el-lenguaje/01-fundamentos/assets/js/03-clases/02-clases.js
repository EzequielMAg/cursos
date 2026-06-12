class Persona {
	// Por defecto las clases usan el modo estricto, lo que significa que no es posible usar variables sin declararlas previamente

	// Por defecto, las propiedades de una clase se inicializan con el valor de UNDEFINED
	// Sin embargo, es posible asignar un valor por defecto a las propiedades de una clase
	
	static _conteo = 0; // Propiedad privada, solo se puede acceder desde dentro de la clase
	static get conteo() {
		return Persona._conteo + ' instancias';
	}

	nombre = '';
	codigo = '';
	frase = '';
	comida = '';
	_nemesis = '';

	constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {
		if (!nombre) throw Error('El nombre es obligatorio');
		if (!codigo) throw Error('El codigo es obligatorio');
		if (!frase) throw Error('La frase es obligatoria');

		this.nombre = nombre;
		this.codigo = codigo;
		this.frase = frase;

		Persona._conteo++;
	}
	
	set setComidaFavorita( comida ) {
		this.comida = comida.toUpperCase();
	}

	get getComidaFavorita() {
		return `La comida favorita de ${ this.nombre } es ${ this.comida }`;
	}

	set nemesis( nemesis ) {
		this._nemesis = nemesis.toUpperCase();
	}

	get getNemesis() {
		return `El nemesis de ${ this.nombre } es ${ this._nemesis }`;
	}

	// Los metodos son funciones que se definen dentro de una clase, y que pueden ser llamadas desde las instancias de la clase
	quienSoy() {
		console.log(`Soy ${ this.nombre } y mi identidad es: ${ this.codigo }`);
	}

	miFrase() {
		this.quienSoy(); // Error: quienSoy is not defined, porque no se puede llamar a un metodo desde otro metodo sin usar el operador THIS
		console.log(`Mi frase es: ${ this.frase }`);
	}

	static mensaje() {
		console.log('Hola, soy un mensaje / metodo estatico');
	}
}

const ironMan = new Persona(); // Creando una nueva instancia de PERSONA
console.log({ ironMan });

const spiderMan = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman'); // Creando una nueva instancia de PERSONA
console.log({ spiderMan });

const captainAmerica = new Persona('Steve Rogers', 'Capitan America', 'Soy el capitan america'); // Creando una nueva instancia de PERSONA
console.log({ captainAmerica });

ironMan.quienSoy(); // Soy  y mi identidad es: Sin codigo
ironMan.miFrase(); // Mi frase es: Sin frase

spiderMan.quienSoy(); // Soy Peter Parker y mi identidad es: Spiderman
spiderMan.miFrase(); // Mi frase es: Soy tu amigable vecino Spiderman

captainAmerica.quienSoy(); // Soy Steve Rogers y mi identidad es: Capitan America	
captainAmerica.miFrase(); // Mi frase es: Soy el capitan america

spiderMan.setComidaFavorita = 'El pastel de carne de la tía May';
console.log( spiderMan );

console.log( spiderMan.getComidaFavorita ); // La comida favorita de Peter Parker es EL PASTEL DE CARNE DE LA TÍA MAY

spiderMan.nemesis = 'Doctor Octopus';
console.log( spiderMan.getNemesis ); // El nemesis de Peter Parker es DOCTOR OCTOPUS

console.log( Persona._conteo ); // 2
Persona.mensaje(); // Hola, soy un mensaje / metodo estatico