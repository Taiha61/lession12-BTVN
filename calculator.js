equaTo.onclick = function() {
    const firstNumber = parseInt(document.getElementById("firstNumber").value);
    const secondNumber = parseInt(document.getElementById("secondNumber").value);
    const calculation = document.getElementById("calculation").value;
    const result = document.getElementById("result");
    if (calculation == "+") {
        return result.innerHTML = firstNumber + secondNumber;
    } else if (calculation == "-") {
        return result.innerHTML = firstNumber - secondNumber
    } else if (calculation == "*") {
        return result.innerHTML = firstNumber * secondNumber;
    } else if (calculation == "/") {
        return result.innerHTML = firstNumber / secondNumber;
    } else {
        alert(`Hãy nhập 1 trong 4 phép toán + , -, * , /`)
    }
}