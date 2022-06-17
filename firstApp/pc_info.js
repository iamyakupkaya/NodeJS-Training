const os = require("os");
const fs = require("fs");
const freeRam = byteToGB(os.freemem); // free RAM
const totalRam = byteToGB(os.totalmem()); // total RAM
const usedRam = totalRam - freeRam;

const cpu = os.cpus().length;

function byteToGB(totalBytes) {
  return (totalBytes / 1024 / 1024 / 1024).toFixed(2);
}

function ShowOut() {
  const Info = () => {
    return `free ram: ${freeRam}
        total ram: ${totalRam}
        used ram: ${usedRam}
        cpu : ${cpu}`;
  };

  fs.writeFile("pc_info.txt", Info(), (err) => {
    if (err) console.error("Hata oluştu. Hata:", err);
  });
}

exports.ShowOut=ShowOut;