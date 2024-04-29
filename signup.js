let signup = document.getElementById("signupForm");


username.addEventListener("input", function() {
    document.getElementById("usernameError").innerHTML = '';
    document.getElementById("passwordError").innerHTML = ''; 
});


password.addEventListener("input", function() {
    document.getElementById("passwordError").innerHTML = ''; 
});


signup.addEventListener("submit", function(e) {
    e.preventDefault();

    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    let userNameError = document.getElementById("usernameError");
    let userPasswordError = document.getElementById("passwordError");


    if(username === ''){
        userNameError.innerHTML = 'Please enter a username.';
    }

    if(password === ''){
        userPasswordError.innerHTML = 'Please enter a password.';
    }

    if(username === '' || password === '') {
        return false;
    }



    // it check the if username already exists in local storage
    let users = JSON.parse(localStorage.getItem("users")) || [];
   // it add the new user to the users array
   users.push({ username: username,
                password: password 
             });

   // it update the users array in the local storage
   localStorage.setItem("users", JSON.stringify(users));

   alert("Signup successful!");
   window.location.href = "login.html";


});
 
    //  localStorage.setItem("username", username);
    //  localStorage.setItem("password", password);
    
    // alert("Signup successful!");
    // window.location.href = "login.html";


