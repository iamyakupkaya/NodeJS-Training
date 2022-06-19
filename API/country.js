const https = require("https");

https
  .get("https://restcountries.com/v2/name/turkey", (response) => {
    let data = "";
    response.on("data", (chunk) => {
      //console.log(chunk)
      data += chunk;
    });
    response.on("end", () => {
      console.log(typeof data); // gelen data string türünde gelir o yüzden parse etmeliyiz.
      const jsonData = JSON.parse(data); //bu method string ifadeyi JSONa dönüştürür.
      console.log(typeof jsonData); //object -dizi-
      if (jsonData[0]) console.log("Data tamamlandı..\n", jsonData[0].name);
      else console.error("Could not achieve data")
    });
  })
  .on("error", (err) => {
    console.log("Veri alırken Hata çıktı..", new Error(err));
  });
