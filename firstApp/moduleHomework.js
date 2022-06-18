// create a moduleHomework js module file
// this module should show us some data about pc which it is running
// ypu may use os module to do this task
// you should create a function and that function should calculate ram size, using ram size and cpu after that all informations shoul be writing in pc_info.txt
// this program can be invoked another documents.

//using our module in this file...

console.log("Starting...");
const OsModule = require("./pc_info");

OsModule.ShowOut();
console.log("Finished.!");
