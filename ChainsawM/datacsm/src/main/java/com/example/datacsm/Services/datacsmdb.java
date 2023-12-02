package com.example.datacsm.Services;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

import com.example.datacsm.Helpers.Conexion;
import com.example.datacsm.Models.datacsm;

public class datacsmdb {
    private Connection _cn;

    public datacsmdb() {
        this._cn = new Conexion().openDb();
    }

    public List<datacsm> Obtenertodo(String id) {
        List<datacsm> Datacsms = new ArrayList<>();
        try {
            PreparedStatement stmt = _cn.prepareStatement("SELECT * FROM tabla where id_sec = ?");
            stmt.setString(1, id);
            ResultSet result = stmt.executeQuery();
            while (result.next()) {
                datacsm Datos = new datacsm(
                        result.getString("id_sec"),
                        result.getString("titulo"), 
                        result.getString("parrafo"),
                        result.getString("imagen")

                );

                Datacsms.add(Datos);
            }
            stmt.close();
            result.close();
            return Datacsms;
        } catch (Exception e) {
            int x = 1;
        }
        return null;

    }
}
