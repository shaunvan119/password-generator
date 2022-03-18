

let code = []
let passwords1 = document.getElementById("rectangle1")
let codeTwo = []
let passwords2 = document.getElementById("rectangle2")
let codeThree = []
let passwords3 = document.getElementById("rectangle3")
let codeFour = []
let passwords4 = document.getElementById("rectangle4")

// 3. Grab ahold of the player-el paragraph and store it in a variable called playerEl

// 4. Render the player's name and chips in playerEl

//let alphabetTwo = "abcdefghijklmnopqrstuvwxyz"
    //let randomCharacterTwo = alphabetTwo[Math.floor(Math.random() * alphabetTwo.length)]

// first password function
function getRandomPassword() {
    let randomPassword = Math.floor( Math.random()*100000 ) + 1
    
        return randomPassword 
    }
//Secound password function
function getRandomPasswordTwo() {
    let randomPasswordTwo = Math.floor( Math.random()*100000 ) + 1
    
        return randomPasswordTwo
    }

//Third password function
function getRandomPasswordThree() {
    let randomPasswordThree = Math.floor( Math.random()*100000 ) + 1
    
        return randomPasswordThree
    }

//Fourth password function
function getRandomPasswordFour() {
    let randomPasswordFour = Math.floor( Math.random()*100000 ) + 1
    
        return randomPasswordFour
    }




function generatePassword() {
    
    let firstPassword = getRandomPassword()
    let secoundPassword = getRandomPasswordTwo()
    let thirdPassword = getRandomPasswordThree()
    let fourthPassword = getRandomPasswordThree()
    code = [firstPassword]
    codeTwo = [secoundPassword]
    codeThree = [thirdPassword]
    codeFour = [fourthPassword]
    render()
    
}

function render() {
    passwords1.textContent = "Password: "
    for (let i = 0; i < code.length; i++) {
        passwords1.textContent += code[i] + " "
    }

    passwords2.textContent = "Password: "
    for (let i = 0; i < codeTwo.length; i++) {
        passwords2.textContent += codeTwo[i] + " "
    }

    passwords3.textContent = "Password: "
    for (let i = 0; i < codeThree.length; i++) {
        passwords3.textContent += codeThree[i] + " "
    }

    passwords4.textContent = "Password: "
    for (let i = 0; i < codeFour.length; i++) {
        passwords4.textContent += codeFour[i] + " "
    }


   
    
    
}










