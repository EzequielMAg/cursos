import { getUser, getUsuarioActivo } from "../base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {

    test('getUser debe retornar un usuario', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(testUser).toStrictEqual(user);
    });

    test('getUsuarioActivo debe retornar un usuario', () => {

        const name = 'Ezequiel'
        const user = getUsuarioActivo(name);

        expect(name).toBe(user.username);
        expect(user).toEqual({
            uid: 'ABC567',
            username: name
        });
    })
});