const webp = require("webp-converter");
const fs = require("fs");
const resizeImg = require("resize-img");
const readline = require("readline");

// this will grant 755 permission to webp executables
webp.grant_permission();
//pass input image(.webp image) path ,output image(.jpeg,.pnp .....)
let i = 0;
//dwebp(input,output,option)
const dir = "./";
const files = fs.readdirSync(dir);
let clase_a_quitar = "19";
let clase_a_meter = "3";
let names = [
  "Posicion_arma_larga",
  "Posicion_arma_punzocortante",
  "Posicion_arma_corta",
  "Posicion_sin_arma",
];
let nameArchivo = names[1];
contador = 716;
files.forEach((element) => {
  //console.log(element);
  string = element.split(".");

  //console.log(string[1]);
  if (
    string[1] == undefined &&
    string[0] !== "node_modules" &&
    string[0] !== "convertidos"
  ) {
    console.log("Es una carpeta");
    let dir2 = "./" + string[i];
    let files2 = fs.readdirSync(dir2);
    files2.forEach(async (element2, index) => {
      string2 = element2.split(".");

      try {
        // const result = webp.dwebp(dir2+'/'+string2[0]+'.webp',dir2+'/'+string2[0]+'.jpg',"-o",logging="-v");
        if (string2[1] == "jpg") {
          // Rutas de los archivos de entrada y salida
          let name = `${nameArchivo}_${contador}`;
          let archivojpg = `${dir2}/${string2[0]}.jpg`;
          let Newarchivojpg = `${dir2}/${name}.jpg`;

          try {
            if (fs.existsSync(archivojpg)) {
              let result = fs.rename(archivojpg, Newarchivojpg, (error) => {
                if (error)
                  console.error(
                    "Error hacer rename el archiv jpg:" +
                      `${dir2}/${string2[0]}.jpg`,
                    error
                  );
              });
              contador++;
            } else {
              console.log(
                "Error jpg:" +
                  fs.existsSync(archivojpg)
              );
            }
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
