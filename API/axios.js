const axios = require("axios");

function CapitalInfo(country) {
  axios.get("https://restcountries.com/v2/name/" + country).then((response) => {
    if (response.data) {
      // data destructuring :)
      const [
        {
          name,
          capital,
          languages: [{ name: lan_name }],
        },
      ] = response.data;
      // console.log("Country:", data.name);
      // console.log("Capital City:", data.capital);
      // console.log("Formal Language:", data.languages[0].name);
      console.log(
        `Country: ${name} | Capital City: ${capital} | Formal Language: ${lan_name}`
      );
    } else {
      console.error("WARN! Error...");
    }
  });
}

module.exports.deneme = CapitalInfo;
