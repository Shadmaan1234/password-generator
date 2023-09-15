const passwordBox = document.getElementById("password");
const length = 8;

const upppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercse = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789"
const symbols = "!@#$%&";

const allChar = upppercase + lowercse + number + symbols;

function createPassword(){
    let password = "";
    password+= upppercase[Math.floor(Math.random() * upppercase.length)];
    password+= lowercse[Math.floor(Math.random() * lowercse.length)];
    password+= number[Math.floor(Math.random() * number.length)];
    password+= symbols[Math.floor(Math.random() * symbols.length)];

    while(length > password.length){
        password+= allChar[Math.floor(Math.random() * allChar.length)];
    }

    passwordBox.value = password;    

    function copyPassword(){
        passwordBox.select();
        document.execCommand("copy");
    }
}
