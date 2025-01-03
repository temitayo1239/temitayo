
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const inputFirstName = document.getElementById('inputFirstName').value.trim();
    const inputLastName = document.getElementById('inputLastName').value.trim();
    const inputEmail4 = document.getElementById('inputEmail4').value.trim();
    const inputPassword4 = document.getElementById('inputPassword4').value.trim();
    const inputAddress = document.getElementById('inputAddress').value.trim();

    // Check if inputs are not empty
    if (inputFirstName !== '' && inputLastName !== '' && inputEmail4 !== '' && inputPassword4 !== '' && inputAddress !== '') {
        // Show the toast
        const toast = document.getElementById('toast');
        toast.classList.add('show');

        // Hide the toast after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            window.location.href = 'http://127.0.0.1:5501/index.html';
        }, 3000);

        // Here, you can add your registration logic (e.g., API call)
        console.log('Registration successful for:', inputFirstName, inputLastName, inputEmail4, inputPassword4, inputAddress);
    } else {
        // Optionally, show an alert or message if fields are empty
        alert('Please fill in all fields.');
    }
});
function validateCredentials(inputFirstName, inputLastName, inputEmail4, inputPassword4, inputAddress) {
    // Check username length
    if (inputPassword4.length <= 2) {
        return "Username must be more than 2 characters.";
    }

    // Check password length
    if (inputPassword4.length < 8) {
        return "Password must be at least 8 characters long.";
    }

    // Check for at least one numeric character
    if (!/\d/.test(inputPassword4)) {
        return "Password must contain at least one numeric character.";
    }

    // Check for at least one special character
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(inputPassword4)) {
        return "Password must contain at least one special character.";
    }

    return "Credentials are valid!";
}
