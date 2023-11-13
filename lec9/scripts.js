var start = new Date();

function stopTime() {
    var stop = new Date();
    var difference = stop.getTime() - start.getTime();
    var seconds = difference / 600;
    alert("You have been on the page for " + seconds + " seconds.");
 }