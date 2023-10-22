## SECCION 8: Lazy Image + Modules

Vamos a pulir nuestra aplicacion de Gifs. Ya que cuando hacemos la busqueda de gifs, a veces tardan un poco en cargar la imagen del Gif y luego aparecen de golpe, vamos a agregarle un FADE IN.

- QUE ES ESTO de FADE IN? Hablando con chatGPT:
 "fade in" no es una característica o concepto específico del framework en sí, sino más bien un término que se refiere a una técnica común de animación utilizada para mostrar gradualmente un elemento en la interfaz de usuario. Esta técnica se basa en la animación de transición para hacer que un elemento aparezca gradualmente en lugar de simplemente aparecer instantáneamente.
<br>

- Lo importante que veremos sobre Angular, es el poder **importar modulos en otros modulos.**
  Veremos como hacer una dependencia del modulo Shared por ejemplo en otros modulos.

- En nuestro modulo SHARED agregaremos los siguientes componentes:
    - Lazy Image
    - Loder
    - Navbar

- Muchos diran que no tiene sentido que programemos nosotros el Lazy Image, ya que en NPM existen muchos paquetes ya de Angular listos para hacer esta funcionalidad. Pero no vamos a usar ninguno, lo programaremos nosotrosw mismo, no es muy complicado y es muy educativo realizarlo.
<br>

##¿Qué veremos en esta sección?
El objetivo principal de la sección es poder aprender a realizar un loading mientras la imagen se carga, pero indirectamente haremos:

- @Inputs
- @Outputs
- Custom Components
- Validaciones
- Importación de módulos personalizados

Entre otras cosas
