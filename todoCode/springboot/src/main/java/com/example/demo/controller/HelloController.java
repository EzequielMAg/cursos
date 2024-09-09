package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {


    @GetMapping
    public String home() {
        return "HOME!";
    }

    @GetMapping("/hello")
    public String sayHello() {
        return "Hello world!";
    }

    @GetMapping("/bye")
    public String sayBye() {
        return "Bye world!";
    }

    // De esta forma con la anotacion @PathVariable podemos recibir parametros por la URL
    // El nombre del parametro tiene que ser igual al definido dentro de las {} del path del @GetMapping
    @GetMapping("hello/{name}")
    public String sayHello(@PathVariable String name) {
        return "Hello World " + name;
    }

    @GetMapping("hello/{name}/{age}/{profession}")
    public String sayHelloComplete(@PathVariable String name,
                                   @PathVariable int age,
                                   @PathVariable String profession) {
        return "Hello world! Tu nombres es " + name +
                "%20Edad: " + age +
                "%20Profesión: " + profession;
    }

    // Otra de forma de recibir multiples parametros en un endpoint dentro de un controller es con @RequestParam
    // Aca en vez de / se usa ? luego nameParam = valor, separados por & si hay mas de uno:
    @GetMapping("/bye2")
    public String sayByeComplete(@RequestParam String name,
                                 @RequestParam int age,
                                 @RequestParam String profession) {
        return "Bye World! Tu nombre es " + name +
                "Tu edad es: " + age +
                "Tu profesion es: " + profession;
    }
}
