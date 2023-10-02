/* 
*   Antes de explicar como funciona el modelo de JavaScript es importante entender algunos conceptos:

*   - Procesamiento Single thread y Multi thread.
*   - Operaciones de CPU y operaciones de I/O.
*   - Operaciones concurentes y paralelas.
*   - Operaciones bloqueantes y no bloqueantes.
*   - Operaciones Sincronicas y asincronicas

    JS es un lenguaje de un solo subproceso o hilo -> Single Thread, osea que solo puede ejcutar
    una cosas a la vez, y esto de una forma, simplifica la escritura de codigo, ya que no tenemos
    que preocuparnos por los problemas de concurrencia.

    El problema principal cuando se trabaja con un solo hilo, es que hay que tener precaucion con
    bloquear el hilo principal (unico) cuando se accede a la red.

    EJEMPLO: solicitamos datos a una API y dependiendo de la situacion de la red, del servidor, esto 
    puede tardar, mucho o poco tiempo en procesar tal solicitud y mientras, el hilo principal del codigo
    estaria bloqueado, esto haria que la pagina web no respondiera. Aqui es donde entra en juego la
    ASINCRONIA , que permite justamente, realizar largas solicitudes de red, sin bloquear el hilo principal.

    JS fue diseñado para ser ejecutado en navegadores, trabaja con peticiones hacia la red y procesar las
    interacciones con el usuario, esto tratando de mantener una interfaz lo mas posiblemente fluida.

*   JS trabaja sobre un modelo ASINCRONO y NO BLOQUEANTE. Y tiene un loop de eventos implementado en un
*   solo hilo, para operaciones de entrada-salida = E/S ( = I/O = input/output). Gracias a esto JS es
*   altamente concurrente, a pesar de trabajar en un solo hilo.

*   Procesamiento Single thread y Multi thread.
    Los hilos son las unidades basicas de ejecucion de cada proceso que realiza nuestra maquina.
    Por ej.: cada vez que abrimos el navegador, o el IDE, se crea un proceso e internamente tales procesos
    pueden correr varios hilos o un solo hilo que es lo que ejecuta su funcionalidad. Entonces dependiendo
    de las caracteristicas del lenguaje, van a haber lenguajes que trabajan en un solo hijo (single thread)
    y lenguajes que trabajan en multi hilos (multi thread).

    IMAGEN DE EVENT LOOP:
    https://1.bp.blogspot.com/-E3ksTbDBmj4/WXzBb5G1wJI/AAAAAAAAB5I/Cl5if7O9xLQ8SZuYnfmvZtytecWGTP63QCLcBGAs/s1600/EventLoop.png

*   Operaciones concurentes y paralelas.
    La concurrencia significa cuando dos o mas tareas prograsan simultaneamente, se estan ejecutando al mismo tiempo 
    y avanzan simultaneamente, se alterna entre tareas. La concurrencia se utiliza para lograr una mayor eficiencia en 
    el uso de los recursos.
    Mientras que el paralelismo es cuando dos o mas tareas se ejecutan al mismo tiempo. Pareciera lo mismo que la
    concurrencia, pero...

*   Operaciones bloqueantes y no bloqueantes.
    Una operacion bloqueante no va a devolver el control a la aplicacion/hilo principal hasta que haya terminado toda su tarea
    Y no bloqueante significa, que las operaciones se ejecutan y imediatamente devuelven el control al hilo principal, no 
    importando si terminan o no la tarea. Y cuando la tarea no bloqueante, acabe, avisara con una notificacion al hilo
    principal y devolvera el recursos solicitado o el mensaje correspondiente o en caso contrario, se podra manejar un 
    codigo de error.

*   Operaciones Sincronicas y asincronicas
    Se refiere a cuando tendra lugar la rta. Poniendo el ejemplo de presente-pasado-futuro, SINCRONO significa que la rta
    sucede en el presente, en el tiempo inmediato, una operacion sincrona, espera el resultado, en tiempo presente y ya, sigue.
    Mientras que asincrono, la rta sucede en un futuro. Se ejecuta, pero no sabe cuando va a venir la rta. La operacion asincrona
    no va a esperar el resultado. Es por eso que suelta inmediatamente le control y lo regresa al hilo principal.
*/

/* 
    En JS vamos a tener dos tipos de codigo:
    - CODIGO SINCRONO BLOQUEANTE
    - CODIGO ASINCRONO NO BLOQUEANTE
    en un SOLO HILO y con operaciones de I/O.
*/


//* CODIGO SINCRONO BLOQUEANTE
(() => {
    console.log("Codigo sincrono");
    console.log("Inicio");

    function dos() {
        console.log("Dos");
    }

    function uno() {
        console.log("Uno");
        dos();
        console.log("Tres");
    }

    uno();
    console.log("Fin");
})();


//* CODIGO ASINCRONO NO BLOQUEANTE
(() => {
    console.log("Codigo Asincrono");
    console.log("Inicio");

    function dos() {
        setTimeout(function () {
            console.log("Dos");
        }, 1000);
    }

    function uno() {
        setTimeout(function () {
            console.log("Uno");

        }, 0);
        dos();
        console.log("Tres");
    }

    uno();
    console.log("Fin");
})();