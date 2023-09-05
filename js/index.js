const signUpButton = document.getElementById("signUpButton");
const signInButton = document.getElementById("signInButton");
const signUpForm = document.getElementById("signUpForm");
const signInForm = document.getElementById("signInForm");

signUpButton.addEventListener("click",() => {
    signUpForm.style.display = "block";
    signInForm.style.display = "none";
});

signInButton.addEventListener("click",() => {
    signInForm.style.display = "block";
    signUpForm.style.display = "none";
});