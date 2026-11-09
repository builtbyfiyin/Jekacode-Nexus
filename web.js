const usernameInput = document.getElementById( "username");
const passwordInput = document.getElementById( "password");
const loginBtn = document.getElementById( "loginBtn");
const message = document.getElementById("message");

const CORRECT_USERNAME = "ADERIBIGBE";
const CORRECT_PASSWORD = "FIYINFOLUWA123";

loginBtn.addEventListener ("click", function(){
    let username = usernameInput.value;
    let password = passwordInput.value;

    if (username ==="" || password==="" ){
        message.textContent=" fill all the fields";
        message.style.color = "red";
        return;
}
    
 if(username=== CORRECT_USERNAME && password=== CORRECT_PASSWORD){ 
    message.textContent = "login successful ";
    message.style.color = "green"
} else{ 
    message.textContent =" Wrong username or password";
    message.style.color = "red";
}
})
    

