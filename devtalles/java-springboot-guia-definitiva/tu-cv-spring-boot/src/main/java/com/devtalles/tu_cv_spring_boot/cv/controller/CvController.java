package com.devtalles.tu_cv_spring_boot.cv.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/cv")
public class CvController {

    @GetMapping("/home")
    public String index() {
        return "index";
    }

    @GetMapping("/pep")
    public String pep() {
        return "pep";
    }
}
