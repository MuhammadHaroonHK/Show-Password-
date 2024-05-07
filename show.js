let password = document.getElementById("password");
let button = document.getElementById("btn");

button.addEventListener(('click') , () => {
    if(password.type=="password") {
        password.type="text";
        button.src="eye-open.png";
    }else{
        password.type="password";
        button.src="eye-close.png";
    }
})
