window.onload = function() {
    // Used https://stackoverflow.com/questions/12409299/how-to-get-current-formatted-date-dd-mm-yyyy-in-javascript-and-append-it-to-an-i to help with date format (mm/dd/yyyy)
    var now = new Date();
    var date = now.toLocaleDateString();
    document.getElementById("date").innerText = date;

    // Used https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript for help refining date function

    var contentDiv = document.getElementById("content");
 
    var content = "<h3>50% off Christmas Sale!</h3>";
 
    contentDiv.innerHTML = content;
 
    var images = Array.from(document.querySelectorAll('.gallery-image'));
    var currentImage = 0;

    // Used https://stackoverflow.com/questions/61957530/how-to-change-an-image-every-5-seconds-for-example for help on the image gallery function
 
    function changeImage() {
        images[currentImage].style.opacity = 0;
        currentImage = (currentImage + 1) % images.length;
        images[currentImage].style.opacity = 1;
        setTimeout(changeImage, 5000);
    }
    changeImage();
 }