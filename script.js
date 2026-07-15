const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Menu open/close
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Menu item par click hone par menu band
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Menu ke bahar click karne par menu band
document.addEventListener("click", (e) => {
    if (
        !menuToggle.contains(e.target) &&
        !navLinks.contains(e.target)
    ) {
        navLinks.classList.remove("active");
    }
});