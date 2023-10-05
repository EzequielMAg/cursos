/* 
*   ENCADENAMIENTO OPCIONAL
*/

interface Passenger {
    name: string;
    children?: string[]; // puede que viajen con hijos o no, o que no tengan, podria tener un arreglo vacio, 
                         // pero no vamos a forzar a que los objetos tengan una prop q no necesitan    
}


const passenger1: Passenger = {
    name: 'Fernando'
}

const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia', 'Elizabeth']
}

const passenger3: Passenger = {
    name: 'Ezequiel',
    children: ['Adrian']
}


//const printChildren = (passenger: Passenger) => {
const returnChildrenNumber = (passenger: Passenger): number => {

    //* EL optional chaining es el '?'. Dice "si existee, entonces accede al valor/prop .lenght; Y con el operador OR, dice, 
    //* si es undefined, null, etc, entonces asigna el cero"
    const howManyChildren = passenger.children?.length || 0;
    
    // Tambien esta el operador !, que depende de donde lo usemos puede ser la negacion, pero aqui en la propiedad se llama
    // "not null acceptor operator": y este es como decirle a Ts "confia en mi, nunuca vas a recibir un nulo en ese punto".
    //*const howManyChildren = passenger.children!.length;

    console.log(passenger.name, howManyChildren);
    return howManyChildren;
}

returnChildrenNumber(passenger1);