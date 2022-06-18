console.log("Program is starting...");

function getUser(id) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("User id:", id);
      resolve({ id: id, name: "Yakup" });
      reject("There is a error. From getUser");
    }, 2000);
  });
}

function getAdress(id, name, city, country) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({
        id,
        name,
        city,
        country,
      });
      reject("There is a error. From getAddress");
    }, 3000);
  });
}

getUser(456789)
  .then((user) => {
    getAdress(user.id, "Yakup", "Manisa", "Turkey")
      .then((address) => {
        console.log(
          `id: ${address.id} name: ${address.name} city: ${address.city} country: ${address.country}`
        );
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  }); //this code block is same with following code block...

// first then bring data from getUser, second then birng from getAdress. Because we invoke getAddress with first then

getUser(1234)
  .then((result) => getAdress(result.id, result.name, "Magnesia", "Turkey"))
  .then((address) =>
    console.log(
      `id: ${address.id} name: ${address.name} city: ${address.city} country: ${address.country}`
    )
  )
  .catch((err) => {
    console.log(err);
  });

console.log("finished...");
