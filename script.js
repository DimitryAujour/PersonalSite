document.querySelector(".animated-button").addEventListener("click", function(event) {
    event.preventDefault();  // Stop the immediate navigation
    var overlay = document.getElementById("overlay");
    overlay.style.display = "block";  // Show the overlay

    setTimeout(function() {
        window.location.href = './Contact.html';  // Navigate after the transition time
    }, 2000);  // 500ms matches the CSS transition time
});
