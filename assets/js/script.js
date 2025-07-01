document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault();
    
    let user = document.querySelector(".name").value.trim();
    let password = document.querySelector(".password").value.trim();
    let message = document.getElementById("passwordMessage");

    let validUsers = ["hammad", "Hammad", "HAMMAD","Jaspreet","krishna"];
    let validPassword = "12345";

    if (!user || !password) {
        message.innerText = "Please enter both username and password.";
        message.style.color = "red";
        return;
    }

    if (validUsers.includes(user) && password === validPassword) {
        message.innerText = "Login Successful!";
        message.style.color = "green";

        setTimeout(() => {
            window.location.href = "./home.html";
        }, 2000);
    } else {
        message.innerText = "Invalid username or password.";
        message.style.color = "red";
    }
});
