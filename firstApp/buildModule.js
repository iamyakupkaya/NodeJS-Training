const path = require("path"); //this is a build module.. İf we wanna use build module we should use dot slash ./

const pathObject = path.parse(__dirname); //this parse parse string to object and __dirname show us our directory address

console.log(pathObject);

const fs = require("fs");

fs.readdir("./", { withFileTypes: false }, (err, files) => {
  console.log(files); // show us our files in ./ director that means our working directory. it depends path parametres.
  console.log(err);
});
