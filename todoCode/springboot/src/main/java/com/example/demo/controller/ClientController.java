package com.example.demo.controller;

import com.example.demo.model.Client;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ClientController {

    @PostMapping("/client")
    public void addClient(@RequestBody Client client) {
        System.out.println("Datos del cliente. ID: " + client.getId() +
                " Nombre: " + client.getName() +
                " Apellido: " + client.getSurname());

    }

    @GetMapping("cliente/traer")
    @ResponseBody //Con esta anotacion podemos retornar informacion en el body como response ante un GET.
    //Aunque si esta comentada igualmente anda, ya que esta declarada de forma implicita por el @RestController.
    //region
    /* La anotación @RestController es una combinación de @Controller y @ResponseBody. Esto significa que todos los
       métodos de controlador en una clase anotada con @RestController retornan directamente los datos en formato JSON
       o XML, dependiendo de la configuración del proyecto y el tipo de datos que se retorne. No necesitas usar
       @ResponseBody explícitamente en cada método, ya que @RestController lo hace automáticamente por ti.

       Por lo tanto, si comentas @ResponseBody, el comportamiento no cambia, porque @RestController sigue asegurándose
       de que el cuerpo de la respuesta sea serializado a JSON y devuelto al cliente.

       Si estuvieras usando solo @Controller en lugar de @RestController, entonces sí necesitarías @ResponseBody para
       que los datos sean retornados en el cuerpo de la respuesta en lugar de intentar resolver una vista (que es el
       comportamiento predeterminado de @Controller). */ //endregion
    public List<Client> traerClientes() {
        List <Client> listaClientes = new ArrayList<>();
        listaClientes.add(new Client(1L, "Zlatan", "Ibrahimovic"));
        listaClientes.add(new Client(2L, "Cristiano", "Ronaldo"));
        listaClientes.add(new Client(3L, "Lionel", "Messi"));

        return listaClientes;
    }

    // Arriba vimnos que con @RepsonseBody nos permitia enviar datos o mensajes JSON dentro del cuerpo de
    // un mensaje HTTP. Aunque no es la unica forma que existe, a cont. usaremos "ResponseEntity". Esta nos
    // permite manipular el cuerpo, la cab ecera o incluso los codigos de estaod, haciendo que la rta brindada sea
    // totalmente personalizada.
    @GetMapping("/pruebaresponse")
    ResponseEntity<String> traerRespuesta() {
        return new ResponseEntity<>("Esto es un mensaje de Response Entity", HttpStatus.BAD_REQUEST);
    }
}
