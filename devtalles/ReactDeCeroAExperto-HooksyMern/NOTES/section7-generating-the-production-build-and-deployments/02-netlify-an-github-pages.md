### Netlify:

1. Primero hay que hacer build del proyecto. Como estamos usando yarn seria:
    > yarn build

2. Ir a la pagina de netlify (https://www.netlify.com/), iniciar sesion, arrastrar y soltar la carpeta 'build' dentro de la pagina y listo!
3. Podemos configurar la url y ya podemos compartir nuestro link del proyecto.

4. Si necesitamos actualizar/cambiar algo del proyecto, una vez hecho eso, hacemos el buil de nuevo y arrojamos la carpeta en la seccion 'build' de nuestra pagina y Netlify actualizara el proyecto usando el mismo link.

### GitHub Pages:

0. Hay que tener buildeado el proyecto y cambiarle el nombre de la carpeta 'build' a 'docs' (Github detecta tal nombre de carpeta).
1. Ir al archivo 'index.html' que esta dentro de la carpeta 'build' y modificar todas las rutas de los archivos a los que accede agregandole el './'
2. Tenemos que tener nuestro proyecto subido a GitHub. Commiteamos todo y hacemos el push luego de hacer los pasos anteriores.
3. Vamos a la esquina superior derecha del repo en github, el engranaje de "ajustes", click ahi.
4. Ahora en el menu izq, la opcion "pages"
5. Elegir la rama que queremos hacer el deploy, generalmente main/master, pero podemos elegir otra que querramos.
6. Elegir "docs" y no "/root" (aun no se q hace ese root).
7. Y finalmente click en SAVE. Y listo! PAGINA DEPLOYADA EN GITHUB PAGES!

