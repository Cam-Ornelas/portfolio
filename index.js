// Sticky Navbar Function
window.onscroll = function() {myFunction()};

// Get Navbar
var myNavbar = document.getElementById("myNavbar");

var sticky = myNavbar.offsetTop;

// Add Sticky Class
function myFunction() {
  if (window.pageYOffset >= sticky) {
    myNavbar.classList.add("sticky")
  } else {
    myNnavbar.classList.remove("sticky");
  }
}