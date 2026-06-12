class Persona {
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

	quienSoy() {
		console.log(`Soy ${ this.nombre } y mi identidad es: ${ this.codigo }`);
	}

	miFrase() {
		this.quienSoy(); 
		console.log(`Mi frase es: ${ this.frase }`);
	}

	static mensaje() {
		console.log('Hola, soy un mensaje / metodo estatico');
	}
}

class Heroe extends Persona {

  clan = 'Sin clan';

  constructor(nombre, codigo, frase, clan) {
    super(nombre, codigo, frase); // Llamando al constructor de la clase padre (Persona)
    this.clan = clan;
  }

  quienSoy() {
    console.log(`Soy ${ this.nombre }, del clan ${ this.clan }`);
    super.quienSoy(); // Llamando al metodo quienSoy de la clase padre (Persona)
  }
}

const spiderMan = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
console.log({ spiderMan });

const ironMan = new Heroe('Tony Stark', 'Ironman', 'Yo soy Ironman');
console.log({ ironMan });

ironMan.quienSoy();