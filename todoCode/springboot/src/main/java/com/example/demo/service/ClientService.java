package com.example.demo.service;

import com.example.demo.model.Client;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService implements IClientService {


    @Override
    public void createClient(Client client) {
         
    }

    @Override
    public List<Client> getClients() {
        return null;
    }
}
