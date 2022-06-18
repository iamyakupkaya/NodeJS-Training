console.log("starting...");

function getUser(id) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("User async-await id:", id);
      resolve({ id: id, name: "Yakup" });
      reject("There is a error. From getUser");
    }, 2000);
  });
}

function getAddress(id, name, city, country) {
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

// if we wanna use async await we should await in async function.
// if we should use await then we should have a function which defined with async and wrap await keywords with
// if there is error in the async function.. how can we catch it. of course with try-catch :) there is no then catch with async await

async function Info() {
  try {
    const user = await getUser(45001);
    const address = await getAddress(user.id, "Yakup KAYA", "Manisa", "Turkey");
    console.log(
      `id: ${address.id} name: ${address.name} city: ${address.city} country: ${address.country}`
    );
  } catch(err) {
    console.log("We have a error :)", err);
  }
}

Info();

console.log("finished");
