const usernameRegex = /^[a-zA-Z0-9-_.]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,12}$/;

const validateForm = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    var passwordCheck = true;
    let form = document.querySelector("#register-form");
    if ( form.password.value !== form.confirmPassword.value ) {
        passwordCheck = false;
    } 
    let message = document.querySelector("#message");
    let messageText = document.querySelector("#message-text");
    messageText.innerHTML = "";
    message.classList.remove("invisible");
    if (message.classList.contains("alert-danger")) {
        message.classList.remove("alert-danger");
    }
    if (passwordCheck) {
        form.reset();
        messageText.innerHTML = "<strong>Success!</strong>\
        You have been registered successfully <i class='fa-sharp fa-solid fa-check'></i>"; 
    }   
    else {
        message.classList.add("alert-danger");
        messageText.innerHTML = "<strong>Error!</strong> Passwords do not match";
    }
};

document
    .getElementById("register-form")
    .addEventListener("submit", (e) => {
    validateForm(e);
});

document.
    getElementById("username")
    .addEventListener('input', (e) => {
        let username = e.target.value;
        if (username.length < 5  || username.length > 12) {
         // set custom error message
            e.target.setCustomValidity("Username must be between 5 and 12 characters");   
        } 
        else if (!username.match(usernameRegex)) {
            e.target.setCustomValidity("username can have alphabets, numerics and some special\
                                        characters like (hyphen, underscore, dot)");
        }   else {
            e.target.setCustomValidity("");
        }
    }
);

document.
    getElementById("password")
    .addEventListener('input', (e) => {
        let password = e.target.value;
        if (password.length < 7 || password.length > 12) {
            e.target.setCustomValidity("Password must be between 7 and 12 characters");
        }
        else if (!password.match(passwordRegex)) {
            e.target.setCustomValidity("Password must have atleast one uppercase, one lowercase\
                                        and one numeric character");
        } else {
            e.target.setCustomValidity("");
        }
    }
);
