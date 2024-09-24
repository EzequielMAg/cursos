import { usContext } from "../base-pruebas/06-deses-obj";

describe('Pruebas en "06-deses-obj"', () => {
    test('usContext debe retornar un objeto', () => {

        const clave = 'Ironman'
        const edad = 26;

        const obj = usContext({ clave, edad });

        expect(obj).toEqual({
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        });
    });
});