let loginForm = document.getElementById("loginForm")

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let email = document.getElementById("email")
    let password = document.getElementById("password")
    if (email.value == "" || password.value == "") {
        alert("Enter both Email and Password to proceed")
        // location.href=""

    } else {
        console.log(`this form as an ${email.value} and  ${password.value}`)
        localStorage.setItem("email", email)
        localStorage.setItem("password", password)
    }
    email.value = ""
    password.value = ""
})

let signUp = document.getElementById('register')

signUp.addEventListener("click", () => {
    // Simulate account creation
    showNotification();
});

function showNotification() {
    const notification = document.getElementById('notification');
    notification.classList.remove('hidden');

    // Automatically hide notification after 3 seconds
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 3000);
}
