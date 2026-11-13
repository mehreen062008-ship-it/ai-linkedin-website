// 1. Hello Button Ka Kaam
function sayHello() {
  alert("Hello! I am Mehreen Fatima - AI Engineer. Let's work together! Check my LinkedIn for more.");
}

// 2. Website Khulte Hi Welcome Message
console.log("Welcome to Mehreen Fatima Portfolio!");

// 3. Neeche Scroll Karne Pe Smooth Jana
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    let target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// 4. Cards Pe Mouse Le Jane Pe Halka Sa Hilna
let cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = "scale(1.03)";
    this.style.transition = "0.3s";
  });
  card.addEventListener('mouseleave', function() {
    this.style.transform = "scale(1)";
  });
});

// 5. Header Ka Rang Change Hona Jab Scroll Karo
window.addEventListener('scroll', function() {
  let header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.background = "#0F1738";
  } else {
    header.style.background = "rgba(7,11,30,0.9)";
  }
});

// 6. Stats Wale Numbers Ko Animate Karna
let stats = document.querySelectorAll('.stats h3');
stats.forEach(stat => {
  stat.style.color = "#F5D67B";
});

// 7. Contact Button Pe Click Karne Pe Message
console.log("Mehreen Fatima - Portfolio Loaded Successfully!");