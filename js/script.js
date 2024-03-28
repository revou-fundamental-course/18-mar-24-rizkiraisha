// Function to validate form

function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var destination = document.getElementById("destination").value;

  if (name == "" || email == "" || destination == "") {
    alert("Mohon lengkapi semua kolom!");
    return false;
  }
  return true;
}

// Pop out the menu in responsive design

const navIcon = document.getElementById("nav-icon");
const navList = document.getElementById("nav-list");

navIcon.addEventListener("click", () => {
  navList.classList.toggle("hidden");
});

// Auto slider on banner function

document.addEventListener("DOMContentLoaded", function() {
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let slides = document.querySelectorAll('.slide');
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 5000);
  }
});