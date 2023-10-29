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
let str2 = "";
const miArray = [];

for (let i = 0; i <= 100; i++) {
  miArray.push({
    id: i,
    total: 0,
  });
  if (i == 100) {
    main();
  }
}
function main() {
  contador = 0;
  files.forEach((element) => {
    string = element.split(".");

    if (
      string[1] == undefined &&
      string[0] !== "node_modules" &&
      string[0] !== "convertidos"
    ) {
      let dir2 = "./" + string[i];
      let files2 = fs.readdirSync(dir2);
      files2.forEach(async (element2) => {
        string2 = element2.split(".");
        try {
          if (string2[1] == "txt") {
            // Rutas de los archivos de entrada y salida
            let archivotxt = `${dir2}/${string2[0]}.txt`;
            try {
              let data = fs.readFileSync(archivotxt, "utf8");
              let lineas = data.split("\n");
              let dataConverted = lineas.map((linea) => {
                let datos = linea.split(" ");
                miArray[datos[0] * 1].total = miArray[datos[0] * 1].total + 1;
                console.log(
                  JSON.stringify(
                    miArray.filter((x) => {
                      return x.total > 0;
                    }),
                    null,
                    3
                  )
                );
                return linea;
              });
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
}
