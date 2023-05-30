


function generator(length){
    const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];
    let password = " "

        for (i=0; i < length; i++){
            const randomInteger = Math.floor(Math.random() * characters.length)
            password += characters[randomInteger]
        }
            return password;
        }

function submitForm(){
        const lengthInput = document.getElementById("userLength")
        const userInput = parseInt(userLength.value, 10);
        const passwordLength = userInput; // Specify the desired password length
      
        const passwordElement1 = document.getElementById('password-el');
        const passwordElement2 = document.getElementById("password-el2")
        const copyButton = document.getElementById('copyButton');
        
        const password1 = generator(passwordLength);
        const password2 = generator(passwordLength);
            passwordElement1.textContent = password1;
            passwordElement2.textContent = password2;
            console.log("User input:" && userInput);
    
   
}
   





        
        
        
       
   

function generate1(){
    
    for (i=0; i < digits.length; i++){
    
    randomInteger = Math.floor(Math.random() * digits.length)
    data = digits[randomInteger] 
     
    
   
   
    }
    
    
    
   
}
