"use strict";
//modulo = require("modulo")
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("echo ", function (mensaje) {
    //eliminar las comillas dobles y simples
    mensaje = mensaje.split('"').join('');
    mensaje = mensaje.split("'").join('');
    console.info("".concat(mensaje));
    rl.close();
});
