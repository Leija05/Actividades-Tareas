// index.js — usando CommonJS
const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: "¡Hola desde CommonJS! 🐮",
    e: "oo",
    T: "U "   
  })
);
