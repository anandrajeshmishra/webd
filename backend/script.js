// var hello = require('./script2')
// var a = 24;
// console.log("anandkumar mishra");
// var oneLinerJoke = require('one-liner-joke');
// var figlet = require("figlet");
var figlet = require("figlet");

figlet("ANANDKUMAR", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});