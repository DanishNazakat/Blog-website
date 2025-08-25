
let usersdatabase = JSON.parse(localStorage.getItem('userInfo')) || [];
let loginusers = JSON.parse(localStorage.getItem('loginUserData')) || [];
// user Name 
// let userNameNo = usersdatabase.length - 1;
// console.log(userNameNo)
// let userName = document.getElementById('userName').innerText = usersdatabase[userNameNo].name;


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

console.log(usersdatabase[1].email);









// login function 
function loginfnc() {
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let userFound = false;
    for (let i = 0; i < usersdatabase.length; i++) {
        if (email.value === usersdatabase[i].email && password.value === usersdatabase[i].password) {
            window.location.href = ("home.html");
            userFound = true;
            let loginuserInfo = {
                email: email.value,
                password: password.value,
                indexno: i
            }
            loginusers.push(loginuserInfo);
            localStorage.setItem("loginUserData", JSON.stringify(loginusers));
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


// blog section
function opendiv() {
    let closeicon = document.getElementById('closeicon');
    let blogform = document.getElementById('blogform');
    blogform.style.display = "flex";
    document.body.style.overflow = "hidden";

    console.log("Event Fired")
}
function closediv() {
    let closeicon = document.getElementById('closeicon');
    let blogform = document.getElementById('blogform');
    blogform.style.display = "none";
    document.body.style.overflow = "scroll";
}


// blog Content

let userblogs = JSON.parse(localStorage.getItem("blog")) || [];
function createBlog() {
    let blogTittle = document.getElementById('blogTittleinp').value;
    let authorName = document.getElementById('authorNameinp').value;
    let blogContent = document.getElementById('blogContent').value;
    let file = document.getElementById('file');
    console.log(file)
    let imgUrl = URL.createObjectURL(file.files[0]);
    let blogimg = document.createElement('div');
    blogimg.setAttribute("class", "blogimg");
    blogimg.style.backgroundImage = `url(${imgUrl})`;

    let userblog = {
        blogTittle,
        authorName,
        blogContent,
        imgUrl
    }
    userblogs.push(userblog);
    localStorage.setItem("blog", JSON.stringify(userblogs));

    // let blogtittleout = document.getElementById('blogtittle').innerText = blogTittle;
    // let blogContentout = document.getElementById('blogdescription')
    //     .innerText = blogContent;
    // let authorNameout = document.getElementById('authorName').innerText = authorName;
    blogform.style.display = "none";
    document.body.style.overflowY = "scroll";

    let line = document.createElement('hr');

    let main = document.querySelector(".main");
    let blogSeciton = document.createElement('div');
    blogSeciton.setAttribute("class", "blogSeciton");


    let blogtittle = document.createElement('h1');
    blogtittle.setAttribute("id", "blogtittle");
    blogtittle.innerText = blogTittle;


    let blogdescription = document.createElement("p");
    blogdescription.setAttribute("id", "blogdescription")
    blogdescription.innerText = blogContent;

    let authorDetails = document.createElement('div');
    authorDetails.setAttribute("class", "authorDetails")

    let authorNamen = document.createElement('div');
    authorNamen.setAttribute("id", "authorName");
    authorNamen.innerText = authorName;


    let puslishDate = document.createElement('div');
    puslishDate.setAttribute("id", "puslishDate");
    let D = new Date();
    let day = D.getDate();
    let month = D.getMonth();
    let year = D.getFullYear();
    puslishDate.innerText = `${day} - ${month + 1} - ${year}`;
    // blogSeciton.innerText = "Asad";
    // blogSeciton.style.color = "Black";
    main.append(blogSeciton);
    console.log(blogSeciton);
    blogSeciton.append(blogtittle);
    blogSeciton.append(blogdescription);
    blogSeciton.append(authorDetails);
    authorDetails.append(authorNamen);
    authorDetails.append(puslishDate)
    blogSeciton.append(blogimg)
    blogSeciton.append(line)
    // main.appendChild(blogdescription)
}
// let blogSeciton = document.querySelector('.blogSeciton');
