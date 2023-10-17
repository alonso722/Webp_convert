const fs = require("fs");

// List all the filenames before renaming
getCurrentFilenames();

function getCurrentFilenames() {
  console.log("Current filenames:");
  let contador = 0;
  fs.readdirSync(__dirname).forEach((file) => {
    let element = file.split(".");
    console.log(file);
    if (element[1]) {
      if (element[1] === "jpg") {
        console.log("Haciendo rename");
        // fs.rename(element[0]+'.'+element[1], 'arma_'+contador+'.jpg', () => {
        //     console.log("\nFile Renamed!:" + contador);
        // });
        fs.copyFile(
          element[0] + "." + element[1],
          "arma_" + contador + ".jpg",
          (err) => {
            if (err) {
              console.log("Error Found:", err);
            } else {
              console.log("\nFile Contents ");
            }
          }
        );
        contador++;
      }
    }
  });
}
