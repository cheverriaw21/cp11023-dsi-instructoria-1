//modulo = require("modulo")
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("echo ", function (mensaje:string) { 
    //eliminar las comillas dobles y simples
    mensaje = mensaje.split('"').join(''); 
    mensaje = mensaje.split("'").join('');
    
	console.info(`${mensaje}`);
	rl.close();
})