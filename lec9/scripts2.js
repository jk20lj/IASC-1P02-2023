function getAge() {
    var age = Number(prompt("What is your age?"));
    var year = new Date().getFullYear();
    var birthYear = year - age;
    document.getElementById("birthYear").innerHTML = "Your birth year is " + birthYear;
   }