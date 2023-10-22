- Creamos el componente "lazy-image"  dentro del modulo "shared" y lo vamos a usar para las imagenes de los gifs.

- Para poder lograr esto, debemos exportar el componente en el modulo "shared" e importar este modulo en los imports del modulo "gifs"

- Angular tiene un evento para las iamgenes, que detecta cuando ya se cargo la imagen o cuando se esta empezando a cargar:
  - (load): cuando ya se cargo.
  - (loadstart): cuando empieza a cargarse.
