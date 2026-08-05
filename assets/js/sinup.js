// Login Page
const togglePassword = document.querySelectorAll(".togglePassword");

togglePassword.forEach(item => {
    item.addEventListener("click", () => {
        if(item.previousElementSibling.type === "password") {
            item.previousElementSibling.type = "text";
            item.classList.replace("fa-eye", "fa-eye-slash");
        } else {
            item.previousElementSibling.type = "password";
            item.classList.replace("fa-eye-slash", "fa-eye");
        }
    });
});



// Sign Up Page
