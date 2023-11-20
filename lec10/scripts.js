function calculate(mode) {
    var number1 = Number(document.getElementById('number1').value);
    var number2 = Number(document.getElementById('number2').value);
    var sum;
    if (mode === '+') {
        sum = number1 + number2;
    } else if (mode === '-') {
        sum = number1 - number2;
    } else if (mode === '*') {
        sum = number1 * number2;
    } else if (mode === '/') {
        sum = number1 / number2;
    }
    document.getElementById('output').textContent = sum;
  }