const logForm = document.querySelector(".login-form");

logForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = logForm.elements.email.value;
    const password = logForm.elements.password.value;

    if (email === "" || password === "") {
        return alert("All form fields must be filled in");
    }

    const information = {
        email: email.trim(),
        password: password.trim(),
    };

    console.log(information);
    logForm.reset();
});
