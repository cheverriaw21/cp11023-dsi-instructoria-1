"use strict";
var readline = require('readline');
//para leer archivo
var fs = require("fs");
fs.readdir('./', function (error, files) {
    if (error) {
        throw error;
    }
    //ruta o entrada
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    //para leer la ruta
    rl.question("cat ", function (ruta) {
        //leer archivo
        fs.readFile(ruta, 'UTF-8', function (error, archivo) {
            if (error) {
                console.error("¡Entrada no válida, comprueba que sea un archivo!");
            }
            //si esta definido se muestra
            if (archivo) {
                console.info(archivo);
            }
        });
        rl.close();
    });
});
