##**¿Que es Angular?**

- Es un FRAMEWORK. Un marco de trabajo estandarizado. 
- Viene con todo lo que necesitas para trabajar.
- Es modular.
- Google es quien le da mantenimiento hoy en dia.

<br><br>
##**Bloques fundamentales**
Angular se compone de cinco bloques fundamentales:
1. **Componentes**
    Bloque de codigo HTML que tiene su contraparte en Ts, que usualmente es una clase comun y corriente que tiene un decorador.
    Tambien se busca que los componentes sean bloques pequeños de codigo y los mas simples posible.
    <br>

2. **Servicios**
    Estos nos permiten que no hagan falta entrar en redux(?), bloc, u otros tipos de gestor de estado.
    Los servicios de angular son sigletons bastantes fuertes que te van a permitir trabajar toda la aplicacion con la informacion centralizada. Podriamos decir que los servicios son lugares centralizados de informacion.
    Usualmente nosotros vamos a tener un componente, ese componente va a tener un boton HTML y ese boton es el que va a llamar al servicio, para que grabe en BD, para que traiga informacion, o cualquier otra cosa.
    <br>    

3. **Directivas**
    Hay 3 tipos de directivas:
        - Directivas de componentes.
        - Directivas estructurales.
        -Directivas de atributos.
        <br>    

    Las **directivas de componentes**, basicamente es muy parecido a un componente, solo que tiene un pedazo de codigo HTML reutilizable, el cual ya viene como conectado. Es decir, tu colocas la directiva, y ya crea ese HTML con cierta funcionalidad integrada.

    Las **directivas de estructurales** lo que haces es modificar el DOM o el HTML, ya sea añadiendo elementos o removiendo elementos.

    Las **directivas de atributos** que basicamente cambian la apariencia o el comportamiento de un elemento, otro componente o bien una directiva.
    <br>

4. **Rutas**
    Sirven para mostrar diferentes componentes basados en el URL del navegador web o el URL en el cual se encuentra el cliente
    <br>

5. **Modulos**
    Permiten agrupar todo lo que hablamos, inclusive otros modulos.
    Podemos tener todo un modulo de productos, en el cual va a estar toodo lo relacionado a productos, las pantallas para mostrar los productos, agregar, editar productos o servicios.
    Otros ejempplo de modulos pueden ser: modulos de autenticacion, modulos de proveedores, modulos de clientes, etc.

    Otra cosa de los modulos es que si queremos crear, un calendario por ejemplo, no lo vamos a crear desde cero, existen muchos modulos hechos para que lso descarguemos, lo incorporamos a otros modulos de nuestra aplicacion y ya tenemos toda la funcionalidad lista. 

