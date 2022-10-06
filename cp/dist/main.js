"use strict";
var readline = require('readline');
//para leer archivo
var fs = require("fs");
//ruta o entrada
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//para leer la ruta
rl.question("cp ", function (entrada) {
    var rutas = entrada.split(" ", 2);
    console.info(rutas);
    //leer archivo
    fs.readFile(rutas[0], 'UTF-8', function (error, archivo) {
        if (error) {
            console.error("¡Entrada no válida, comprueba que sea un archivo!");
        }
        //si esta definido se muestra
        if (archivo) {
            console.info(archivo);
            fs.write("copia", archivo, function (err) {
                if (err) {
                    throw ("Hubo un error");
                }
                console.info("Archivo Copiado");
            });
        }
    });
    rl.close();
});
