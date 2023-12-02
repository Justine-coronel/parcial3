package com.example.datacsm.Helpers;

import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.SQLException;

public class Conexion {
    /**
     * @return
     */
    public Connection openDb() {
        try {
            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
            String Connectionurl = "jdbc:sqlserver://localhost:1433;databaseName=Parc3;user=prueba;password=1234;encrypt=true;trustServerCertificate=true";
            Connection conexion = DriverManager.getConnection(Connectionurl);
            return conexion;
        } catch (SQLException e) {
            System.out.println("La base de datos no ha podido ser conectada");
            int x = 1;
        } catch (final ClassNotFoundException cnefx) {
            int x = 1;
            System.out.println("ERROR CLASE");
        }
        return null;

    }

}
