let usersdatabase = []





// login function 
function loginfnc() {
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let userFound = false;
    for (let i = 0; i < usersdatabase.length; i++) {
        if (email.value === usersdatabase[i].email && password.value === usersdatabase[i].password) {
            window.open("index.html");
            userFound = true;
        }

    }
    if (userFound === false) {
        document.getElementById('loginfailed').style.display = 'block';
        email.value = "";
        password.value = "";
    }
}




// SignUp function

let UserInfo = {}
function signupfnc() {
    let name = document.getElementById('signupName').value;
    let email = document.getElementById('signupEmail').value;
    let password = document.getElementById('signupPassword').value;
    let userExist = false;
    for (let i = 0; i < usersdatabase.length; i++) {
        if (email.value === usersdatabase[i].email) {
            console.log("Email Already Exist");
            document.getElementById('loginfailed').style.display = 'block';
            email.value = "";
            userExist = true;

        }
    }
    let newUser = {
        name, email, password
    }
    usersdatabase.push(newUser)
    console.log("User Details saved");
    console.log(usersdatabase)  
}


console.log(usersdatabase)


localStorage.setItem("userslist", JSON.stringify(usersdatabase));

let data = localStorage.getItem("userslist");
console.log(data);
usersdatabase = JSON.parse(data);
