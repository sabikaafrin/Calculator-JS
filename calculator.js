let firstValue = document.getElementById("first").value;
let secondValue = document.getElementById("second").value;
let resultValue = document.getElementById("result");
let operator = document.getElementById("button").value;

        if (operator === '+') {
            resultValue = first + second;
        } 
        else if (operator === '-') {
            resultValue = value1 - value2;
        } else if (multiplyButton === '*') {
            result = value1 * value2;
        } else if (divideButton === '/') {
            result = value1 / value2;
        }
        result.value = resultValue;


addButton.addEventListener("click", function() {
    
});

subtractButton.addEventListener("click", function() {
   
});

multiplyButton.addEventListener("click", function() {
    calculate('*');
});

divideButton.addEventListener("click", function() {
    calculate('/');
});

