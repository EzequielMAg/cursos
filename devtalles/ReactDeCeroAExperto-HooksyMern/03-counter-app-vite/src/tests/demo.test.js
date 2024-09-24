// El 'describe' es para ponerle un titulo al TEST, y de esta forma tenerlo mas ordenado
describe('Pruebas en <DemoComponent />', () => { 
    
    // El primer argumento es la descripcion del test y el segundo argumento es un callback del test mismo
    test('Esta prueba no debe de fallar', () => {
    
        // 1. Inicializacion
        const message1 = "Hola mundo";
    
        // 2. estimulo
        const message2 = message1.trim();   //El .trim() le saca los espacios al principio y al final
    
        // 3. Observar el comportamiento... esperado
        expect( message1 ).toBe( message2 );
    })
    
 })