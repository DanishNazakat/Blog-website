
let usersdatabase = JSON.parse(localStorage.getItem('userInfo')) || [];
// user Name 
let userNameNo = usersdatabase.length-1;
console.log(userNameNo)
let userName = document.getElementById('userName').innerText=usersdatabase[userNameNo].name;


// SignUp function
function signupfnc() {
    let name = document.getElementById('signupName').value;
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
        let newUser = {
            name: name,
            email: email,
            password: password
        }
        usersdatabase.push(newUser);
        localStorage.setItem('userInfo', JSON.stringify(usersdatabase));
        window.open("home.html");
    }
} 











// login function 
function loginfnc() {
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let userFound = false;
    for (let i = 0; i < usersdatabase.length; i++) {
        if (email.value === usersdatabase[i].email && password.value === usersdatabase[i].password) {
            window.open("home.html");
            userFound = true;

        }

    }
    if (userFound === false) {
        document.getElementById('loginfailed').style.display = 'block';
        email.value = "";
        password.value = "";
    }
    
    document.getElementById("userName").innerText = "Welcome, ";
}





// blog section
function opendiv(){
    let closeicon = document.getElementById('closeicon');
    let blogform = document.getElementById('blogform');
    blogform.style.display="flex";
    document.body.style.overflow = "hidden";
    
    console.log("Event Fired")
}
function closediv(){
    let closeicon = document.getElementById('closeicon');
    let blogform = document.getElementById('blogform');
    blogform.style.display="none";
    document.body.style.overflow = "scroll";
}


// blog Content

let userblogs = JSON.parse(localStorage.getItem("blog")) || [];
function createBlog(){
    let blogTittle = document.getElementById('blogTittleinp').value;
    let authorName = document.getElementById('authorNameinp').value;
    let blogContent = document.getElementById('blogContent').value;
    let userblog = {
        blogTittle,
        authorName,
        blogContent
    }
    userblogs.push(userblog);
    localStorage.setItem("blog",JSON.stringify(userblogs));
    let blogtittleout = document.getElementById('blogtittle').innerText= blogTittle;
    let blogContentout = document.getElementById('blogdescription').innerText = blogContent;
    let authorNameout = document.getElementById('authorName').innerText = authorName;
    blogform.style.display="none";

}

