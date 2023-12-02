package com.example.datacsm.Models;

public class datacsm {
    private String id;
    private String titulo;
    private String parrafo;
    private String imagenes;

    public datacsm() {
    }

    public datacsm(String id, String titulo, String parrafo, String imagenes) {
        this.id = id;
        this.titulo = titulo;
        this.parrafo = parrafo;
        this.imagenes = imagenes;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getParrafo() {
        return parrafo;
    }

    public void setParrafo(String parrafo) {
        this.parrafo = parrafo;
    }

    public String getImagenes() {
        return imagenes;
    }

    public void setImagenes(String imagenes) {
        this.imagenes = imagenes;
    }

}