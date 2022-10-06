const readline = require('readline');

//para leer archivo
let fs = require("fs");
const {COPYFILE_EXCL} = fs.constants;

//ruta o entrada
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
    
//para leer la ruta
rl.question("cp ", function (entrada:string) { 
    let rutas:string[] = entrada.split(" ",2)

    console.info(rutas)
    fs.copyFile(rutas[0],"."+rutas[1]+"/copia-"+rutas[0],COPYFILE_EXCL,(err:any)=>{
        if (err) throw ("¡Entrada Invalida!\n"+err);
        console.log("Archivo copiado...1")

        // fs.rename("./"+"copia-"+rutas[0],"."+rutas[1]+"/copia-"+rutas[0],(err:any)=>{
        //     if (err) throw ("¡Ha ocurrido un error!"+err);
        //     console.log("Archivo copiado...2")
        // });
    
    });

  
    /*
    //leer archivo
    fs.readFile(rutas[0],'UTF-8',(error:any,archivo:any) =>{
        if(error){
            console.error("¡Entrada no válida, comprueba que sea un archivo!");
        }
        //si esta definido se muestra
        if(archivo){
            console.info(archivo);
            fs.writeFile("copia",archivo,(err:any)=>{
                if(err){
                    throw("Hubo un error");
                }
                console.info("Archivo Copiado")

            });
        }
    });
    */
          
    rl.close();
});