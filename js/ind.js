function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  


  function start(event) {
    event.preventDefault();

    let name = document.getElementById('name').value.trim();
    let surname = document.getElementById('surname').value.trim();
    let username = document.getElementById('username').value.trim();
    let password = document.getElementById('password').value.trim();
    let age = document.getElementById('age').value.trim();
    let gender = document.getElementById('gender').value;

    let isValid = true;

    document.getElementById('nameError').innerHTML = "";
    document.getElementById('surnameError').innerHTML = "";
    document.getElementById('usernameError').innerHTML = "";
    document.getElementById('passwordError').innerHTML = "";
    document.getElementById('ageError').innerHTML = "";
    document.getElementById('genderError').innerHTML = "";

    if (!name) {
        document.getElementById('nameError').innerHTML = "Name is required.";
        isValid = false;
    }
    if (!surname) {
        document.getElementById('surnameError').innerHTML = "Surname is required.";
        isValid = false;
    }
    if (!username) {
        document.getElementById('usernameError').innerHTML = "Username is required.";
        isValid = false;
    }
    if (!password) {
        document.getElementById('passwordError').innerHTML = "Password is required.";
        isValid = false;
    }
    if (!age) {
        document.getElementById('ageError').innerHTML = "Age is required.";
        isValid = false;
    }else if(isNaN(age)){
        document.getElementById('ageError').innerHTML = "Age must be a number.";
        isValid = false;
    }
    if (!gender) {
        document.getElementById('genderError').innerHTML = "Gender is required.";
        isValid = false;
    }

    if (isValid) {
        location.replace("index1.html")
    }
}

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