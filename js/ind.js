function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  


//   function start(event) {
//     event.preventDefault();

//     let username = document.getElementById('username').value.trim();
//     let surname = document.getElementById('email').value.trim();
//     let password = document.getElementById('password').value.trim();

//     let isValid = true;

//     document.getElementById('usernameError').innerHTML = "";
//     document.getElementById('emailError').innerHTML = "";
//     document.getElementById('passwordError').innerHTML = "";

//     if (!surname) {
//         document.getElementById('surnameError').innerHTML = "Surname is required.";
//         isValid = false;
//     }
//     if (!email) {
//         document.getElementById('emailError').innerHTML = "Name is required.";
//         isValid = false;
//     }
//     if (!password) {
//         document.getElementById('passwordError').innerHTML = "Password is required.";
//         isValid = false;
//     }
//     if (isValid) {
//         location.replace("index1.html")
//     }
// }

document.onkeydown = (e) => {
    if (e.key === "Enter" && document.getElementById('gender').value !== "") {
        start(e);
    }
};

function login(){
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    
    let username_db = "Fraz"
    let password_db = "123"

    if(username_db == username && password_db == password){
        location.replace("index.html")
    }else{
        alert('Wrong username or password')
    }


    
}

const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());



const UserInfo = [];      




document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form1');
    const users = [];

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('usernamesign').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('passwordsign').value;

        const user = {
            name: name,
            email: email,
            password: password
        };

        users.push(user);
        logUserList();

        form.reset();
    });

    function logUserList() {
        console.log(users);
    }
});


