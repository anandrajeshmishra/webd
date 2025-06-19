// var hello = require('./script2')
// var a = 24;
// console.log("anandkumar mishra");
// var oneLinerJoke = require('one-liner-joke');
// var figlet = require("figlet");
// var figlet = require("figlet");

// figlet("ANANDKUMAR", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });
import express from 'express'
// const express = require("express");
const app = express()

app.get('/', (req, res) => {
  res.send('Hello Anandkumar Mishra')
})

// app.listen(3000)
app.get('/anand', (req, res) => {
  res.send('Hello mishra anandkumar')
})
app.get('/anand/mishra', (req, res) => {
  res.send('Hello mishra ')
})

app.listen(3000)