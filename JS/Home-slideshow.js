// Declare myIndex as a global variable
var myIndex = 0;

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; // Hide all slides
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1; // Reset index to 1 when it reaches the end
    }
    x[myIndex - 1].style.display = "block"; // Display the current slide
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
