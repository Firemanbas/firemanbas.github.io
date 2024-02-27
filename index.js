const display = document.getElementById("display")

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

function sqaureRoot(){
    display.value = Math.sqrt(display.value);
}

function power(){
    display.value = Math.pow(display.value, 2)
}

function Pi() {
    if (display.value === "") {
        display.value = Math.PI.toString();
    } else {
        display.value = parseFloat(display.value) * Math.PI;
    }
}

function devision(){
    try{
        display.value = eval(1/(display.value));
    }
    catch(error){
        display.value = "Error";
}
}

function Backspace(){
    display.value = display.value.substr(0, display.value.length - 1);
}

function Log(){
    display.value = Math.log10(display.value)
}