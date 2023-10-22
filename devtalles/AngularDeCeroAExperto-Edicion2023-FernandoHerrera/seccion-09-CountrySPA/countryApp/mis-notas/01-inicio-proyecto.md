Cuando estemos creando el poroyecto, siempre nos pregunta el Angular CLI si queremos implementar Angular routing, pero es justamente algo principal que se explicara en la seccion, tecnicamente es el corazon de la seccion, por lo que le diremos que NO y lo configuraremos nosotros de formna manual.

Mas adelante cuando entendamos como funciona este tema de las rutas, si pondremos que si para que se cree automaticamente los archivos de Angular routing.


Para comprender el concepto de SPA y funciones router: empezaremos trabajando con dos modulos los cuales tendran varios paginas, y la idea es andarse moviendo entre esas paginas.

Estos dos modulos son: countries y shared.

El modulo 'countries' lo vamos a cargar mediente carga perezosa/lazy loading, algo muy util cuando las aplicaciones empiezan a crecer mucho.
El modulo 'shared' por el momento no, lo vamos a trabajar de manera tradicional para ver las diferencias con la carga perezosa.

El modulo 'shared' lo importamos en nuestro 'AppModule' para que, a lo largo de todo el modulo principal, tenga conocimiento de todo lo que nuestro modulo 'shared' este exportando.
