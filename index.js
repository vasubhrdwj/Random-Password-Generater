const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passOne = document.getElementById("soln1")
let passTwo = document.getElementById("soln2")

let ansOne = "" 
let ansTwo = ""
let len = characters.length

function GeneratePass() {
    for(let i=0; i<20; i++){
        let sym1 = characters[Math.floor(Math.random()*len)]
        let sym2 = characters[Math.floor(Math.random()*len)]
        ansOne += sym1
        ansTwo += sym2
    }
    passOne.textContent = ansOne
    passTwo.textContent = ansTwo

    ansOne = ""
    ansTwo = ""
}


