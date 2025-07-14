let usersdatabase = [
    {
        name: "danish",
        email: "danish123@gmail.com",
        password: "12345"
    },
    {
        name: "sheharyar",
        email: "sheharyar123@gmail.com",
        password: "12345"
    }
]



localStorage.setItem("userslist", JSON.stringify(usersdatabase));

let data = localStorage.getItem("userslist");
console.log(data);
usersdatabase = JSON.parse(data);


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
function signupfnc() {
    let name = document.getElementById('signupName');
    let email = document.getElementById('signupEmail');
    let password = document.getElementById('signupPassword');
    let userExist = false;
    for (let i = 0; i < usersdatabase.length; i++) {
        if (email.value === usersdatabase[i].email) {
            console.log("Email Already Exist");
            document.getElementById('loginfailed').style.display = 'block';
            email.value = "";
            userExist = true;

        }
        // if(userExist === false){
        //     let newUser = {
        //         name, email,password
        //     }
        //     usersdatabase.push(newUser)
        // }

    }


}


