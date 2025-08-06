
let usersdatabase = JSON.parse(localStorage.getItem('userInfo')) || [];
// user Name 
let userNameNo = usersdatabase.length - 1;
console.log(userNameNo)
let userName = document.getElementById('userName').innerText = usersdatabase[userNameNo].name;


// SignUp function
function signupfnc() {
    let signupFirstName = document.getElementById('signupFirstName').value;
    let signupLastName = document.getElementById('signupLastName').value;
    let email = document.getElementById('signupEmail').value;
    let password = document.getElementById('signupPassword').value;
    let userExist = false;
    for (let i = 0; i < usersdatabase.length; i++) {
        if (email === usersdatabase[i].email) {
            console.log("Email Already Exist");
            document.getElementById('loginfailed').style.display = 'block';
            email.value = "";
            userExist = true;

        }
    }
    if (userExist === false) {

        for (let i = 0; i < email.length; i++) {
            if (email[i] === "@") {
                console.log(email.length + "=" + i)
                let newUser = {
                    signupFirstName,
                    signupLastName,
                    email: email,
                    password: password
                }
                usersdatabase.push(newUser);
                localStorage.setItem('userInfo', JSON.stringify(usersdatabase));
                window.location.href = ("login.html");
                console.log(email.length + "=" + i)

            }
        }
    }
}











// login function 
function loginfnc() {
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let userInfo = document.getElementById('userInfo');
    let userFound = false;
    for (let i = 0; i < usersdatabase.length; i++) {
        if (email.value === usersdatabase[i].email && password.value === usersdatabase[i].password) {
            window.location.href = ("home.html");
            userFound = true;

        }
    }
    if (userFound === false) {
        document.getElementById('loginfailed').style.display = 'block';
        email.value = "";
        password.value = "";
    }

    // document.getElementById("userName").innerText = "Welcome, ";
}






// home page
