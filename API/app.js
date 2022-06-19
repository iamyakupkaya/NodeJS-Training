const capital = require("./axios"); //this module is user-build :)
const yargs = require("yargs");

yargs.command({
    command:"country",
    description:"You can search a country info with writing its name",
    builder:{
        name:{
            description:"country name",
            demandOption:true,
            type:"string"
        }
    },
    handler(argv){
        capital.deneme(argv.name);
    }
});

yargs.parse();