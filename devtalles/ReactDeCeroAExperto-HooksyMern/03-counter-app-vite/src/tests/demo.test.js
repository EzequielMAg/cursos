describe('Pruebas en <DemoComponent />', () => { 
    
    test('Esta prueba no debe de fallar', () => {
    
        // 1. Inicializacion
        const message1 = "Hola mundo";
    
        // 2. estimulo
        const message2 = message1.trim();   //El .trim() le saca los espacios al principio y al final
    
        // 3. Observar el comportamiento... esperado
        expect( message1 ).toBe( message2 );
    })
    
 })