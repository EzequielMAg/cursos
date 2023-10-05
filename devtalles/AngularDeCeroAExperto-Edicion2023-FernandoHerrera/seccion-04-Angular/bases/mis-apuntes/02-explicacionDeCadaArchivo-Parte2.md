##Expliacion de los directorios de un proyecto de Angular (como este :v)

- **.angular**
    Nunca, o al menos el 99,99% del tiempo, no vamos a ir a tal directorio a modificar algo.Esta carpeta es ignorada por Git, esta en el .gitignore.
    <br>
- **.vscode**
    Es algo propio de vsc. Y tambien es ignorada por Git.
    Posiblemente la podamos usar para agregar algo en el archivo "extensions.json". Aqui nosotros podenmos agregar recomendaciones o paquetes recomendados para que otro dev rapidamente monte la alicacion en modo desarrollo y el IDE le recomiende un set de aplicaciones.
    <br>
- **node_modules**
    Estos son los modulos de node :v
    Tambien son ignorados por Git. Todas estos modulos de node se recosntruyen cuando instalamos las dependencia y mandamnos el comando de npm install. Pesan un monton! Son demasiados tambien. Actualmente, pesan aprox 450Mb.
    Todos estos modulos de node, solo son en desarrollo y en el proceso de construccion de mi aplicacion final.
    Todos los modulos de node eventualmente van a terminar siendo ignorados cuando yo haga el build de produccion.
    Cuando hacemos el build (ng build), Angular nos crea los archivos minimos que yo necesito para subirlo.
    <br>
- **./src**
    Es en esta carpeta principalmente, donde nosotros vamos a trabajar y crear nuestro codigo Angular.
    Dentro de esta carpeta tenemos varios otros archivos:
    - **favicon.ico** 
        Este es un icono pequeño que se muestra en la pestaña de la pagina.
        <br>
    - **index.html** 
        Es un simple archivo html. Pero aqui dentro hay algo expecial, un elemento llamado "app-root". Nuestra aplicacion de Angular va a crearse completamente dentro de este elemento personalizado.
        <br>
    - **main.ts** 
        Es el punto de entrad de nuestra aplicacion en Angular.

        Podemos estar trabajando con Angular Universal/Aionic/Electron donde vamos a estar trabajando con el:
        `platformBrowserDynamic().bootstrapModule(AppModule)`
        `.catch(err => console.error(err));`
        esto, nos va a permitir crear aplicaciones de Angular en diferentes plaraformas objetivo.
        <br>

    - **styles.css** 
        Este archivo es para los estilos que son globales. Tambien podemos hacer estilos por componente.
        <br>

    - **./app** 
        - En esta carpeta es donde vamos a comenzar a escribir toda la logica de nuestra aplicacion. Componentes, servicios, modulos, todo lo vamos a  empezar a crear por esta carpeta y son los mismo archivos: .css, .html, etc.
        <br>

        - **"app.component.spec.ts"** el cual esta destinado a puramente testing.
        <br>
        
        - **"app.component.ts"**: 
        Aqui hay una clase con un decorador llamado @Component y dentro define el "app-root", el cual tiene relacion con el elemento especial que esta en el "index.html". Tambien tiene definidas unas referencias a un .html y un .css, que luego veremos con mas detalle.
        <br>

        - **"app.module.ts"**
        Este es el modulo principal. Este es muy importante y hay que tener mucho cuidado. 
        <br>
- **./assets**
    Estos son recursos estaticos que queremos subir, al principio la carpeta esta "vacia", ya creada por default para nosotros. Aqui dentro hay un archivo llamado ".gitkeep" en el cual le decimos a git que esta carpeta es importante para nosotros, aunque este vacia, ya que si Git detecta que no hay nada, Git la ignora. De esta forma, Git va a guardar en el backup, la carpeta vacia.

PD: me paso que subi tres carpetas a github, con titulos de cursos, estaba trabajando en dos de ellas, porque estaba registrando todo el codigo de los cursos, practicando, tomando apuntes etc, pero en uno de los 3 cursos aun no habia empezado, por lo que me quedo la carpeta estaba vacia aun, y al ver el repo en GitHub, me sorprendo de solo ver que tenia 2 carpetas subidas. Me quede como.. -EH? Si yo tenia 3 carpetas... 
Y ahora entendi! Es justamente porque Git ignora las carpetas vacias.. OK. Gracias Fernando Herrera! 










