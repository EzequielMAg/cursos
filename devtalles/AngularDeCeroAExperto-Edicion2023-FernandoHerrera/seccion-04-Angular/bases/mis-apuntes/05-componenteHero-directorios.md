- Hay muchas maneras de manejar la estructura de directorios, o lo que es conocido como "File System" de nuestro proyecto.
  Hay muchas estrategias, muchos patrones, arquitecturas, etc, diferentes formas de organizar nuestra aplicacion.
  A lo largo del curso nosotros vamos a organizar nuestro File System de varias maneras.
  Por ahora, lo haremos basado en modulos.
<br>
- Cada una de las carpetas dentro de "./app" van a ser modulos independientes.
  Lo de modulos lo veremos en un momento. Entonces, por ahora, pensemos que cada carpeta var a ser un algo, un ente, que puede vivir por si solo. Inclusive va a tener su propio agrupador, su propio module.ts de Angular.
<br>
- Vamos a trabajar algo de superheroes -> carpeta "heroes"
  Dentro de esta carpeta vamos a tener otras dos, "hero" y "list". En la primera habra informacion de heroes y en list, habra una lista de heroes. La idea es agrupar todo en algo que tenga una estrecha relacion entre si.
<br>
- Empezaremos a usar el Angular CLI para crear componentes.
<br>
- Se uso el siguiente comando: "ng g c heroes/hero" -> Crea un componente, dentro del path indicado, junto con todos los demas archivos que implican un componente (.css, .html, .spec.ts, .ts y tambien actualizo la dependencia en el modulo encontrado), todo esto muestra la consola con lo que se realizo:
<br>
CREATE src/app/heroes/hero/hero.component.html (19 bytes)
CREATE src/app/heroes/hero/hero.component.spec.ts (545 bytes)
CREATE src/app/heroes/hero/hero.component.ts (194 bytes)
CREATE src/app/heroes/hero/hero.component.css (0 bytes)
UPDATE src/app/app.module.ts (1185 bytes)

ESTA GENIAL! Porque tambien ya vienen cargados con codigo minimo necesario, de esta forma para trabajar mas rapido y codear directamente la aplicacion.

- Todo lo que se escriba en el .css no es global, sino que esta ligado al componente unicamente, eso es genial tambien!
