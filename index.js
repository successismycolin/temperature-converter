// document -> our HTML document
// assigning header text
document.getElementById("header1").textContent = "Temperature Converter";

// assigning label text
const unitSelector = document.getElementById("unitSelector");

console.log(unitSelector.onclick);

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