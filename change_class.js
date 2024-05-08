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
let clase_a_quitar = "0";
let clase_a_meter = "0";
const clases = [
  {
    id_clase: "0",
    salida: "80"
  },
  {
    id_clase: "1",
    salida: "81"
  },
  {
    id_clase: "2",
    salida: "82"
  },
  {
    id_clase: "3",
    salida: "83"
  },
  {
    id_clase: "4",
    salida: "84"
  },
  {
    id_clase: "5",
    salida: "85"
  },
  {
    id_clase: "6",
    salida: "86"
  },
];
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
        if (string2[1] == "txt") {
          // Rutas de los archivos de entrada y salida
          let archivoEntrada = `${dir2}/${string2[0]}.txt`;
          let archivoSalida = `${dir2}/${string2[0]}.txt`;
          try {
            let data = fs.readFileSync(archivoEntrada, "utf8");
            let lineas = data.split("\n");
            let dataConverted = lineas
              .map((linea) => {
                let datos = linea.split(" ");
                let lineaConverted;

                let find = clases.find(x=>(x.id_clase==datos[0]));

                if (clases.find(x=>(x.id_clase==datos[0]))) {
                  datos[0] = (find) ? find.salida : find.id_clase ;
                  contador++;
                  console.log(archivoSalida);
                  lineaConverted = datos.join(" ");
                  return lineaConverted;
                } else {
                  return linea;
                }
              })
              .join("\n");
            //console.log(linea);
            // console.log(dataConverted);
            // console.log(dataConverted);
            fs.writeFileSync(archivoSalida, dataConverted);
            console.log("Total de cambios :" + contador);
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
