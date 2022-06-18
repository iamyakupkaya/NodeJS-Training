console.log("starting...");

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        console.log("in Promise setTimeout");
        resolve("Proccess is successful"); //if func. successful resolve return a data which you given.
        // we can achieve resolve with then.
    },3000)
})


myPromise.then( sonuc => {
    console.log("Gelen sonuç", sonuc);
}).catch(err => {
    console.log("Gelen error", err)
})

console.log("finished..!");
