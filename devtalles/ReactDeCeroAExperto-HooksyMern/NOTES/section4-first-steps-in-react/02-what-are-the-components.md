# Que son los componentes?

    Son una pequeña pieza de codigo encapsulada re-utilizable que puede tener estado o no y que realiza un trabajo en especifico.

Ejemplo de aplicacion: TWITTER, desglozandolo en componentes:
    - Toda la aplicacion podriamos englobarla en un componente llamado 'TwiterApp' y este componente va a enmarcar todos los componentes hijos. Como podria ser 'Menu' (al costado) y dentro del meno podemos segmentarlo aun mas a un componente 'MenuItem'.

Es una buena practica usar UpperCamelCase para los nombres de los componentes.

- TwitterApp > Router > Screen/Pagina > Menu > MenuItem.

TwiterApp seria el componente principal. Luego un Router con el cual podremos hacer navegacion e/ paginas sin hacer refresh del navegador web. Dentro del router podemos tener diferentes pantallas o screens/pages. Luego un Menu y un MenuItem.
Y de esta forma se va a ir creando un arbol de componentes en nuestra aplicacion de REACT.

Tenemos nuestra aplicacion web donde vamos a renderizar ciertos componentes. C/u de los componentes es responsable de alguna accion en especifico. A su vez los componentes puede tener otros componentes hijos.

## ¿Que es el estado?
Ej, un formulario (con nombre, apellido y edad), cuando es renderizado la primera vez tiene un ESTADO INICIAL. Ese estado inicial es como se encuentra la informacion de ese componente la primera vez cuando se abre.

    En breve: un estado es como se encuentra la informacion del componente en un punto determinado del tiempo.