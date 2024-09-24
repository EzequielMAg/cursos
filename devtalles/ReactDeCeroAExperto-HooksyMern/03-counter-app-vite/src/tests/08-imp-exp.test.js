import heroes from '../../../02-intro-javascript/src/data/heroes';
import { getHeroeById, getHeroesByOwner } from '../base-pruebas/08-imp-exp';

describe('Pruebas en 08-imp-exp', () => {

  test('getHeroeById debe retornar un heroe por id', () => {
    const id = 1;
    const hero = getHeroeById(id);
    const testHero =  { id: 1, name: 'Batman', owner: 'DC' };

    expect( hero ).toEqual( testHero );
  });

  test('getHeroeById debe retornar undefined si no existe el id', () => {
    const id = 6;
    const hero = getHeroeById(id);

    expect( hero ).toBe( undefined );

    expect( hero ).toBeFalsy();
  });

  test('getHeroesByOwner debe retornar 3 heroes de DC', () => {
    const heroesDC = getHeroesByOwner('DC');

    expect( heroesDC.length).toBe(3);

    expect( heroesDC[0] ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    expect( heroesDC[1] ).toEqual({ id: 3, name: 'Superman', owner: 'DC' });
    expect( heroesDC[2] ).toEqual({ id: 4, name: 'Flash', owner: 'DC' });

    // Otra forma mas corta (asi fue como lo hizo Herrera):
    expect( heroesDC).toEqual([
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' }
    ]);
  
    // Otra forma que resolvio Herrera
    expect( heroesDC ).toEqual( heroes.filter( (heroe) => heroe.owner === owner) );
  })

  test('getHeroesByOwner debe retornar 2 heroes de Marvel', () => {
    const marvelHeroes = getHeroesByOwner('Marvel');
    
    expect( marvelHeroes.length).toBe(2);
    
    expect( marvelHeroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner) );
  })
});