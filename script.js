
// Welcome Message
function showWelcome() {
    alert("Welcome to AI & LinkedIn Website!");
}

// LinkedIn Profile Function
function openLinkedIn() {
    window.open(
        "https://www.linkedin.com/",
        "_blank"
    );
}

// AI Information Function
function showAIInfo() {
    alert(
        "Artificial Intelligence enables machines to learn, think and solve problems."
    );
}

// Contact Function
function contactUs() {
    alert("Thank you for visiting our website!");
}

// Current Year
const year = new Date().getFullYear();

const footerYear = document.getElementById("year");

if (footerYear) {
    footerYear.textContent = year;
}

// Page Loaded Message
document.addEventListener("DOMContentLoaded", function() {
    console.log("AI & LinkedIn Website is ready!");
});
