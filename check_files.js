const webp = require("webp-converter");
const fs = require("fs");
const resizeImg = require("resize-img");
const readline = require("readline");

// this will grant 755 permission to webp executables
webp.grant_permission();
//pass input image(.webp image) path ,output image(.jpeg,.pnp .....)
let i = 0;
let contadorExist = 0;
//dwebp(input,output,option)
const dir = "./";
const files = fs.readdirSync(dir);
let clase_a_quitar = "19";
let clase_a_meter = "3";
let str2 = "";
contador = 0;
files.forEach((element) => {
  //console.log(element);
  string = element.split(".");

  //console.log(string[1]);
  if (
    string[1] == undefined &&
    string[0] !== "node_modules" &&
    string[0] !== "convertidos"
  ) {
    console.log(string[0]);
    console.log("Es una carpeta");
    let dir2 = "./" + string[i];
    let files2 = fs.readdirSync(dir2);
    files2.forEach(async (element2) => {
      string2 = element2.split(".");
      // console.log(element2);

      try {
        // const result = webp.dwebp(dir2+'/'+string2[0]+'.webp',dir2+'/'+string2[0]+'.jpg',"-o",logging="-v");

        if (string2[1] == "jpg") {
          let archivoEntrada = `${dir2}/${string2[0]}.txt`;
          let archivoSalida = `${dir2}/${string2[0]}.txt`;
          let archivoName = `${dir2}/${string2[0]}`;
          // Rutas de los archivos de entrada y salida
          if (!fs.existsSync(archivoEntrada)) {
            contadorExist++;
            console.log(archivoName);
          }

          try {
            // console.log("Existence: " + contadorExist);
          } catch (error) {
            console.error("Error al leer el archivo:", error);
            return;
          }
        }
      } catch (error) {
        console.error();
      }
    });
  }
});
