const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    const inputText = textInput.value.trim();
    
    inputText !== ""
        ? (textOutput.textContent = event.currentTarget.value)
        : (textOutput.textContent = "Anonymous");
});