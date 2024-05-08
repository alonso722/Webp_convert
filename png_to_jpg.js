const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Ruta de la carpeta con los archivos .png
const directorioEntrada = 'convertidos';
extension =  '.png'
// Leer archivos en el directorio de entrada
fs.readdir(directorioEntrada, (err, archivos) => {
  if (err) {
    console.error('Error al leer el directorio:', err);
    return;
  }

  // Filtrar archivos .png
  const archivosPNG = archivos.filter(archivo => archivo.endsWith(extension));

  // Procesar cada archivo .png
  archivosPNG.forEach(archivo => {
    // Rutas de entrada y salida de los archivos
    const rutaEntrada = path.join(directorioEntrada, archivo);
    const rutaSalida = path.join(directorioEntrada, `${path.basename(archivo, extension)}.jpg`);

    // Convertir archivo .png a .jpg
    sharp(rutaEntrada)
      .jpeg()
      .toFile(rutaSalida, (err, info) => {
        if (err) {
          console.error(`Error al convertir ${rutaEntrada} a .jpg:`, err);
          return;
        }
        console.log(`Archivo ${rutaEntrada} convertido a .jpg:`, info);
      });
  });
});