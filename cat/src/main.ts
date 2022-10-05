const readline = require('readline');

//para leer archivo
let fs = require("fs");
fs.readdir('./',(error:any,files:any)=>{
    if(error){
        throw error
    }

    //ruta o entrada
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
    
    //para leer la ruta
    rl.question("cat ", function (ruta:string) { 
        //leer archivo
        fs.readFile(ruta,'UTF-8',(error:any,archivo:any) =>{
            if(error){
                console.error("¡Entrada no válida, comprueba que sea un archivo!");
            }
            //si esta definido se muestra
            if(archivo){
                console.info(archivo);
            }
        });
          
          
        rl.close();
    });

  
});
