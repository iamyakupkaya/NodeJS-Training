console.log("Starting...");

getUser(12345, function (userObject) {
  console.log("User id: " + userObject.id + " User name: " + userObject.name);
  getAddress(userObject.name, "Turkey", "Magnesia", (userAddress) => {
    console.log(
      userObject.name +
        " is live in " +
        userAddress.city +
        " - " +
        userAddress.country
    );
  });
});

function getUser(id, callback) {
  setTimeout(function () {
    console.log("in getUser");
    callback({ id: id, name: "Yakup" });
  }, 2000);
}

function getAddress(name, country, city, callback) {
  setTimeout(function () {
    console.log("in getAddress");
    console.log("name: " + name);
    callback({ country: country, city: city });
  }, 1500);
}

console.log("finished");
