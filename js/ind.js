function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  
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
        alert('User added')
        console.log(users);
    }
});


