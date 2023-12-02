package com.example.datacsm.Controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.datacsm.Models.datacsm;
import com.example.datacsm.Services.datacsmdb;

@RestController
public class dataControllers {

    @GetMapping("/datacsm")
    public List<datacsm> Obtenertodo(@RequestParam String id) {
        System.err.println(id);
        return new datacsmdb().Obtenertodo(id);
    }
}
