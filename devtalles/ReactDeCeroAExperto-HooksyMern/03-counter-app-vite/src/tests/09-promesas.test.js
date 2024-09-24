import { getHeroeById } from "../base-pruebas/08-imp-exp";
import { getHeroeByIdAsync } from "../base-pruebas/09-promesas"

describe('Pruebas en 09-promesas', () => {                                                                                                      //
    /* Jest ejecuta todo de forma SINCRONA, es decir de forma secuencial. Por lo que cuando llega a la parte de la promesa como que la deja en 
       segundo plano y sigue ejecutando el resto del codigo hasta terminar el test y podria avisarnos que todo esta OK, pero sin haber terminado
       de resolver la promesa. Para esperar a que se resuelva la promesa hay 2 formas: 
        1) el asyn-await que lo veremos en la proxima clase.
        2) el "done" de JEST, que lo usamos como parametro en el callback del test y la mandamos a llamar al final del mismo.
    */
    test('getHeroeByIdAsync debe retornar un heroe', (done) => {

        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {

                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });

                done();
            })
    });

    test('getHeroeByIdAsync debe obtener un error si heroe no existe', (done) => {

        const id = 100;
        getHeroeByIdAsync(id)
            .then( hero => {
                expect( hero ).toBeFalsy();
                done();
            })
            .catch(error => {
                expect(error).toBe(`No se pudo encontrar el héroe con el ID: ${id}`);
                done();
            })
    });

});