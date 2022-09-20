const prompt = require('prompt-sync')({sigint: true})

console.log("Hi! A Dice has 6 sides! Enter roll to play ")
let user = Number(prompt("-->"))
let decision = Math.ceil(Math.random()*user)

console.log(decision)


