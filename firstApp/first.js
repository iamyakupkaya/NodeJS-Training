const variableModule = require("./module");

function SelamVer() {
    console.log(`SelamVer  ${variableModule.isim + " " + variableModule.soyisim} firt Node.js`);
}

console.log(variableModule.Ogrenci.ad);

SelamVer();
variableModule.Yaz(10,20);

