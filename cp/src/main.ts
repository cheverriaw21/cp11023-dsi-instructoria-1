const readline = require('readline');

//para leer archivo
let fs = require("fs");

//ruta o entrada
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
    
//para leer la ruta
rl.question("cp ", function (entrada:string) { 
    let rutas:string[] = entrada.split(" ",2)

    console.info(rutas)
    //leer archivo
    fs.readFile(rutas[0],'UTF-8',(error:any,archivo:any) =>{
        if(error){
            console.error("¡Entrada no válida, comprueba que sea un archivo!");
        }
        //si esta definido se muestra
        if(archivo){
            console.info(archivo);
            fs.write("copia",archivo,(err:any)=>{
                if(err){
                    throw("Hubo un error");
                }
                console.info("Archivo Copiado")

            });
        }
    });
          
    rl.close();
});