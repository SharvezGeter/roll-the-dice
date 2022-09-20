const prompt = require('prompt-sync')({sigint: true})

console.log("Be Aware The Dice Are Rigged For The Number ")
let rigged = Number(prompt("Enter a number you would like to rigg:  -->"))

let roll = Math.ceil(Math.random()*7)

console.log("Actual roll: " + roll)
   
if(roll === 7){
       console.log("rigged")
   }else {
    console.log(roll)
   }

  