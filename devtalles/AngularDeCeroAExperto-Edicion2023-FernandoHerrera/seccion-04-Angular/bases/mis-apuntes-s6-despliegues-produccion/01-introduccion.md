- Vimos que nuestro proyecto pesa aprox 400Mb. Pero no vamos a subir esto, si no que tomaremos nuestra app de Angular y vamos a hacer lo que se conoce como el "tree shaking" = sacudiendo el arbol.
"Se sacude el arbol y se caen las hojas y ramas muertas etc" quedandonos una app de menos de 50kb.

- Al hosting se sube solamente archivos HTML, archivos Css y archivos de Js


- ASSSESTS: Cosas que nunca van a cmbiar: imagenes, loader, archivos de CSS, etc.

- Desplegaremos nuestra aplicacion en: Netlifu y GithubPages.

- Principalmente haremos:
    - Buildear la app
    - Desplegarlo a un sitio web.


## ¿Qué veremos en esta sección?
Este es un breve listado de los temas fundamentales:

1. Generar build de producción
2. Desplegarlo rápidamente
3. Netlify
4. GitHub Pages
5. npm Scripts para automatizar el proceso

- Aquí aprenderemos como generar el build de producción de nuestra aplicación y la desplegaremos en la web.

- El proceso de despliegue en otros servidores es virtualmente el mismo, tomar nuestra carpeta DIST (que contiene la aplicación con archivos HTML, CSS y JS) y desplegarla mediante FTP (preferiblemente sFTP) en el hosting deseado.

----------------------------

###ng build -> para buildear nuestro proyecto      .
