const button = document.querySelector("button")
const input = document.querySelector("#email-input")
let output = document.querySelector("#email-output")

button.addEventListener("click", function() {
    if (input.value !== '') {
        output.textContent = input.value
    } else {
        output.textContent = "please insert valid email"
    }
})