// document -> our HTML document
// assigning header text
document.getElementById("header1").textContent = "Temperature Converter";

// assigning label text
const unitSelector = document.getElementById("unitSelector");
const inputTextBox = document.getElementById("inputTemp");
const convertButton = document.getElementById("convertButton");
let inputIsValid = false;
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
    while (inputIsValid == false) {
        // alert("Please enter a numberic value.");
        inputTextBox.placeholder = "Please enter a number.";
        if (typeof Number(inputTextBox.value) == Number){
            if (unitSelector.textContent == "F"){
                fahrenheitValue = Number(inputTextBox.value);
                celsiusValue = (fahrenheitValue - 32) * 5/9;
            } else {
                celsiusValue = Number(inputTextBox.value);
                fahrenheitValue = (celsiusValue * 9/5) + 32;
            }
        }
    }
}