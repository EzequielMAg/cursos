##**Notas sobre que hace cada uno de los diferentes archivos de un proyecto en Angular (como este)**

- **.editorconfig**
    Nosotros instalamos una extension "EditorConfig for VS Code" la cual nos permite sobreescrbir valores por defecto de nuestro editor de codigo.
    Cuando VS Code encuentra el archivo con este nombre ".editorconfig", establece configuraciones por defecto en VSC para este proyecto.
    Las cuales tienen la finalidad de que el codigo que escribamos luzca igual que los demas desarrolladores que esten trabajando en el mismo editor de codigo. Es una configuracion del editor, no tiene nada que ver Angular.
    <br>


- **.gitignore**
    Archivo propio de Git para evitar que cuando se hagan commits, los archivos y directorios que estan dentro de tal documento, van a ser ignorados y no van a subirse a dicho repositorio. 
    Este archivo tambien es generado automaticamente por Angular, en el se encuentran una lista larga de archivos a ignorar. Y todo lo que esta alli nosotros no necesitamos respaldarlo, ni hace un backup del mismo, porque por lo general son archivos que se generan automaticamente al hacer algun comando de construccion, etc.
    Nosotros no necesitamos hacerle backup, tambien por que nosotros no le vamos a dar mantenimiento a tales archivos, los que lo van a hacer son los autores de cada uno de los paquetes que estan ahi.
    <br>

- **angular.json**
    Archivo para configuraciones de Angular sobre la ejecucion de nuestra aplicacion. Alli podemos setear cual va a ser el archivo principal, cual es el build que vamos a utiizar, cual es el directorio de salida, cuales son los assets estaticos que nosotros vamos a usar en nuestra aplicacion, cuales son los estilos globales de nuestra app, etc, etc. 
    Generalmente nosotros entramos a este archivo para configurar algo de lo mencionado anteriorme y no volvemos a abrir el archivo "en nuestra vida" jajaja.
    <br>

- **package-lock.json**    
    Este archivo dice basicamente como fueron construidos los modulos de node. Nunca lo vamos a tocar manualmente. Lo vamos a manipular cuando toquemos comandos de instalacion o remover dependencias en el "package.json". Nosotros no modificamos este archivo, y NUNCA debemos modificarlo directamente.
    <br>

- **package.json**
    - Lo que esta en este archivo es algo propio de las aplicaciones de node. Aunque es un proyecto de Angular, este, esta construido sobre node. Por eso lo instalamos inicialmente. En el nos informa el nombre de la aplicacion, que scripts tenemos. Inclusive nosotros podemos agregar mas si asi lo deseamos
    <br>
    - Por ahi hay un atributo que dice "private": true; El cual significa que este paquete es privado, que no es un paquete para distribuirlo a internet.
    <br>
    - Dependencias: son paquetes que son requeridos por la aplicacion para crear la aplicacion de produccion. Va a quitar todo lo que no necesita. Si nosotros no utilizamos algunos de todos los pquetes que ya vienen por defecto, se quuitan tales paquetes que no tengan ninguna referencia a tales paquetes.
    Tenemos la dependencia "rxjs" las cuales son las extensiones reacticas. Librerias de ts y node.js
    <br>
    - Luego tenemos las dependencias de desarrollo: las cuales solo son dependencias que me van a ayudar a mi cuando este creando la aplicacion.
    Angular devkit,  angular cli, compiler-cli, jasmine-core, etc... En general estas son dependencias que cuando generamos el build de produccion no van a ser consideradas en el build del mismo.
    <br>
- **README.md**
    Este archivo tiene la finalidad de explicar como se usa la aplicacion. Es para el que desarrollo la app y les explique a los demas devs. Si hay alguna configuracion especial que la aplicacion necesita para hacerla funcionar correctamente. Tal vez haga falta primero leventar la DB por decir un ejemplo, o configurar un endpoint, o variable de entorno.
    Usemos este archivo para dar una documentacion rapida sobre nuestra aplicacion y como hacer el build de produccion.
    <br>
- **tsconfig.app.json**    
- **tsconfig.json**    
- **tsconfig.spec.json**    
    - Estos archivos son configuraciones de Ts, configuraciones de la aplicacion el cual se basa el y extiende el tsconfig.
    Va a ser muuy raro que nosotros toquemos estas configuraciones.
    - En "tsconfig.json" se encuentran las recomendaciones para Angular, por ejemplo el modo estricto, no specific returns.. etc Y un monton de configuraciones que estan puestas para ayudarnos a trabajar Angular de una manera estandarizada. Que esto es algo que les gusta mucho a las empresas, porque todos los desarrolladores de Angular van a seguir estas mismas directrices que nos impone este tsconfig.
    - Luego el " tsconfig.spec.json" es igual al archivo anterior pero esta orientado a la parte de pruebas.






