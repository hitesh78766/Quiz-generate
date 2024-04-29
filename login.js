
    let loginPage = document.getElementById("loginForm");

    username.addEventListener("input", function() {
        document.getElementById("usernameError").innerHTML = '';
        document.getElementById("passwordError").innerHTML = ''; 
    });
    
    
    password.addEventListener("input", function() {
        document.getElementById("passwordError").innerHTML = ''; 
    });
        

    loginPage.addEventListener("submit", function(e) {
        e.preventDefault();
        
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        let userNameError = document.getElementById("usernameError");
        let userPasswordError = document.getElementById("passwordError");
    
    
    
        if(username === '') {
            userNameError.innerHTML = "Please enter a username.";
        }
    
        if(password === '') {
            userPasswordError.innerHTML = "Please enter a password.";    
        }
    
        if(username === '' || password === '') {
            return false
        }
        

// this variable receive the user form the local storage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let userFound= users.find((user) => user.username === username && user.password === password
    );
    // console.log(userFound);

    if (userFound) {
        alert("Login successful!");          
        window.location.href = "quiz.html";
    } else {
        alert("Invalid username or password!");
    }

    });

    