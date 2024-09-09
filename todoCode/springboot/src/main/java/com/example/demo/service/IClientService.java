package com.example.demo.service;

import com.example.demo.model.Client;

import java.util.List;

public interface IClientService {

    // Recordar que por default todos los metodos de una interfaz son abstractas y publicas
    void createClient(Client client);
    List<Client> getClients();


 }
