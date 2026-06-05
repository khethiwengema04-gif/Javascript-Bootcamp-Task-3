// FORM VALIDATION

const form = document.getElementById("signupForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let terms = document.getElementById("terms");

    let valid = true;

    document.querySelectorAll(".error").forEach(error => {
        error.textContent = "";
    });

    document.querySelectorAll("input").forEach(input => {
        input.classList.remove("invalid");
    });

    // Username Validation
    if(username.value.trim() === ""){
        document.getElementById("usernameError").textContent =
            "Username is required";
        username.classList.add("invalid");
        valid = false;
    }

    // Email Validation
    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email.value.trim() === ""){
        document.getElementById("emailError").textContent =
            "Email is required";
        email.classList.add("invalid");
        valid = false;
    }
    else if(!emailPattern.test(email.value)){
        document.getElementById("emailError").textContent =
            "Invalid email format";
        email.classList.add("invalid");
        valid = false;
    }

    // Password Validation
    if(password.value.length < 8){
        document.getElementById("passwordError").textContent =
            "Password must be at least 8 characters";
        password.classList.add("invalid");
        valid = false;
    }

    // Terms Validation
    if(!terms.checked){
        document.getElementById("termsError").textContent =
            "Accept the terms";
        valid = false;
    }

    if(valid){
        alert("Signup Successful!");
    }

});


// TIMING EVENTS

const resendBtn = document.getElementById("resendBtn");

let count = 10;

let timer = setInterval(() => {

    resendBtn.textContent =
    `Resend Verification (${count})`;

    count--;

    if(count < 0){

        clearInterval(timer);

        resendBtn.disabled = false;

        resendBtn.textContent =
        "Resend Verification";

    }

}, 1000);


// FAKE DATABASE

const studentDatabase = [

{
    id: 1,
    firstName: "Khethy",
    lastName: "Ngema",
    email: "khethy@gmail.com",
    course: "IT",
    age: 22
},

{
    id: 2,
    firstName: "Nosipho",
    lastName: "Zincume",
    email: "@gmail.com",
    course: "Engineering",
    age: 23
},

{
    id: 3,
    firstName: "Thando",
    lastName: "Dlamini",
    email: "thando@gmail.com",
    course: "Computer Science",
    age: 20
},

{
    id: 4,
    firstName: "Ntando",
    lastName: "Biyela",
    email: "ntando@gmail.com",
    course: "Accounting",
    age: 21
},

{
    id: 5,
    firstName: "Amanda",
    lastName: "makhanya",
    email: "amanda@gmail.com",
    course: "hospitality",
    age: 24
}

];


// QUESTION 1
// SYNCHRONOUS JAVASCRIPT

function synchronousDemo() {

    console.log("Step-1 - The function is starting");

    console.log("Step-2 - The Process is in action");

    console.log("Step-3 - The function reached the final stage");

}

synchronousDemo();


// QUESTION 2
// USING setTimeout()

function displayStudents() {

    setTimeout(() => {

        const output =
        document.getElementById("output");

        output.innerHTML =
        "<h3>Student Records</h3>";

        studentDatabase.forEach(student => {

            output.innerHTML += `
            <p>
            ID: ${student.id},
            Name: ${student.firstName} ${student.lastName},
            Email: ${student.email},
            Course: ${student.course},
            Age: ${student.age}
            </p>
            `;

        });

    }, 3000);

}

displayStudents();