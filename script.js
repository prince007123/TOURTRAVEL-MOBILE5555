// Slideshow logic
let slides = document.querySelectorAll('.slide');
let index = 0;

setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}, 3000);

document.getElementById("signup-btn").addEventListener("click", function() {
  document.getElementById("signup-popup").style.display = "block";
});

document.getElementById("get-otp").addEventListener("click", function() {
  const phone = document.getElementById("phone-input").value;
  if (/^[6-9]\d{9}$/.test(phone)) {
    document.getElementById("otp-input").style.display = "block";
    document.getElementById("submit-btn").style.display = "block";
  } else {
    alert("Please enter a valid 10-digit mobile number");
  }
});


