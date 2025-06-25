// document -> our HTML document
// assigning header text
document.getElementById("header1").textContent = "Temperature Converter";

// assigning label text
const unitSelector = document.getElementById("unitSelector");
const inputTextBox = document.getElementById("inputTemp");
const convertButton = document.getElementById("convertButton");
let outputDisplay = document.getElementById("outputP");
let celsiusValue;
let fahrenheitValue;
// tried using if statements to change an element's text content upon clicking the element, which doesn't work

// if (unitSelector.click){
//     if (unitSelector.textContent == "F"){
//         unitSelector.textContent = "<sub>o</sub>C";
//     } else if (unitSelector.textContent == "C"){
//         unitSelector.textContent = "F";
//     }
// }

// example of how to do it -> button.onclick = code to be executed after clicking the button / function

unitSelector.onclick = function(){
    if (unitSelector.textContent == "F"){
        unitSelector.textContent = "C";
    } else if (unitSelector.textContent == "C"){
        unitSelector.textContent = "F";
    }
}

// this is where our calculations will take place
convertButton.onclick = function(){
    // var inputIsValid = (typeof Number(inputTextBox.value) == "number");
    // credit for line 37: ChatGPT
    var inputIsValid = !isNaN(Number(inputTextBox.value)) && inputTextBox.value.trim() !== "";
    console.log(typeof inputTextBox.value);
    console.log(typeof Number)
    console.log(typeof Number(inputTextBox.value));
    console.log(inputIsValid);
    if (inputIsValid == false) {
        // alert("Please enter a numberic value.");
        inputTextBox.value = "";
        inputTextBox.placeholder = "Please enter a number.";
        outputDisplay.textContent = "";
    } else {
        if (unitSelector.textContent == "F"){
            fahrenheitValue = Number(inputTextBox.value);
            celsiusValue = (fahrenheitValue - 32) * 5/9;
            outputDisplay.textContent = celsiusValue.toFixed(1) + "C";

            let outputBox = document.getElementById("outputDisplayBox");
            outputBox.classList.remove("animate-drop");
            void outputBox.offsetWidth; // Force reflow
            outputBox.classList.add("animate-drop");
        } else {
            celsiusValue = Number(inputTextBox.value);
            fahrenheitValue = (celsiusValue * 9/5) + 32;
            outputDisplay.textContent = fahrenheitValue.toFixed(1) + "F";

            let outputBox = document.getElementById("outputDisplayBox");
            outputBox.classList.remove("animate-drop");
            void outputBox.offsetWidth; // Force reflow
            outputBox.classList.add("animate-drop");
        }
    }
}
