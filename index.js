const webp=require('webp-converter');
const fs = require('fs')
// this will grant 755 permission to webp executables
webp.grant_permission();
//pass input image(.webp image) path ,output image(.jpeg,.pnp .....)
let i=0;
//dwebp(input,output,option)
const dir = "./"
const files = fs.readdirSync(dir)

files.forEach(element => {
    //console.log(element);
    string = element.split(".");
    
    //console.log(string[1]);
    if (string[1]==undefined && string[0]!=="node_modules" && string[0]!=="convertidos" )
    {
        console.log(string[0]);
        console.log("Es una carpeta");
        let dir2 = './'+string[i];
        let files2 = fs.readdirSync(dir2);
        files2.forEach(element2=>
            {
        console.log(element2);
            
        string2 = element2.split(".");
        console.log(string2);
        console.log(string2[0]+'.webp');
        console.log(string2[0]+'.jpg');
        try {
        const result = webp.dwebp(dir2+'/'+string2[0]+'.webp',dir2+'/'+string2[0]+'.jpg',"-o",logging="-v");
        result.then((response) => {
          console.log(response);
        }); 

        } catch (error) {
            console.error();
        }
        


            });
                            }
                        }
);
    

