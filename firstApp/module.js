let isim = "Yakup";
let soyisim = "KAYA";

function Yaz(a, b) {
  global.console.log(a + b);
}

module.exports.isim = isim; // we don't have to write module before export so if we want, we can remove it. like following
exports.soyisim = soyisim;
exports.Yaz = Yaz;
console.log(module); // içinde exports objesi olan bir objedir. export Objesisi verdiğimiz değpişkenleri tutar.

exports.Ogrenci={
    ad:"Yakup",
    soyad:"KAYA",
    yas:"27"
};