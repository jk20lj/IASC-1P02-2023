function addition() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var finalValue = Number(number1) + Number(number2);
    document.getElementById("output").innerHTML = "The total is " + finalValue;
   }