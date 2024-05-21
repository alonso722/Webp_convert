const fs = require("fs");
const dir = "./";
const files = fs.readdirSync(dir);
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
          for(let file of files2){
              try {
                let dir3 = dir2 + '/' + file;
                let data = fs.readdirSync(dir3)
                for(let folder1 of data){
                    let dir4 = dir3 + '/' + folder1;
                    let jpgFolder = fs.readdirSync(dir4)
                    for(jpg of jpgFolder){
                        let rutajpgOriginal = dir4  + '/' + jpg;
                        fs.renameSync(rutajpgOriginal,dir3 + '/' + jpg)
                    }
                }
              } catch (error) {
                  console.log(error)
              }
          }
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