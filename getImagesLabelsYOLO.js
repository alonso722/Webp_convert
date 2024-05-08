const fs = require("fs");
const dir = "./";
const files = fs.readdirSync(dir);
let clases =
    {
        id:"67", //2,3,4,5,6,7,8,9,10....
        total: 0
    };
let totalMax = 1000;//1000
async function main(){
    for(let element of files){
        string = element.split(".");

        if (
          string[1] == undefined &&
          string[0] !== "node_modules" &&
          string[0] !== "convertidos"
        ) {
          console.log(string[0]);
          console.log("Es una carpeta");
          let dir2 = "./" + string[0];
          let files2 = fs.readdirSync(dir2);
          let res = {
              successfull: [],
              error: [],
              check: []
          }
          for(let file of files2){
              try {
                  let name = file.split('.');
                  if(name[1] == 'txt' && clases.total <= totalMax){
                      console.log("entrando a " + file + " contador: " + clases.total) 
                      let TxTFile = `${dir2}/${name[0]}.txt`;
                      let TxtFileTrain = `${dir2}/Data/${clases.id}-${name[0]}.txt`;
                      let rutaImagenOrigen = `${dir2}/${name[0]}.jpg`;
                      let rutaImagenDestino = `${dir2}/Data/${clases.id}-${name[0]}.jpg`;
                      let data = fs.readFileSync(TxTFile, "utf8");
                      let lineas = data.split("\n");
                      let lineasFilter = lineas
                      .filter((linea)=>{
                          let datos = linea.split(" ");
                          return clases.id == datos[0];
                      }).join("\n");
                      if(lineasFilter != "\n" && lineasFilter != "" && fs.existsSync(rutaImagenOrigen)){
                          fs.writeFileSync(TxtFileTrain, lineasFilter);
                          fs.copyFileSync(rutaImagenOrigen, rutaImagenDestino);
                          clases.total++;
                          res.successfull.push( {
                              name: rutaImagenDestino
                          } );
                      }
                  }
              } catch (error) {
                  console.log(error)
                  res.error.push( {
                      name: rutaImagenDestino
                  } );
              }
          }
          console.log("Resultados \n");
          let response = await SaveResults(res);
          console.log(response)
        }
    }
}
async function SaveResults(res){
    return new Promise((resolve, reject) => {
        try {
            const jsonData = JSON.stringify(res,null,3);
            const filePath = 'Training.json';
            fs.writeFile(filePath, jsonData, 'utf8', (err) => {
            if (err) {
                console.error('Error al guardar el archivo:', err);
                resolve(false)
            }
            console.log('El archivo JSON se ha guardado correctamente.');
            resolve(true)
            });
        } catch (error) {
            reject(error)
        }
    })
}
main();
