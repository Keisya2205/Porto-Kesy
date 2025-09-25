// Navbar
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav .nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 80;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
        }
    });
});


// Ketik Otomatis
const texts = [
    "Informatics Student",
    "Staff of HMIF Entrepreneurship Division",
    "Let's build something amazing!"
];

let count = 0;  
let index = 0;  
let isDeleting = false; 

function type() {
    const currentText = texts[count];
    const display = currentText.substring(0, index);

    document.getElementById("typewriter").textContent = display;

    if (!isDeleting && index < currentText.length) {
        index++;
        setTimeout(type, 100);
    } else if (isDeleting && index > 0) {
        index--;
        setTimeout(type, 50);
    } else if (!isDeleting && index === currentText.length) {
        isDeleting = true;
        setTimeout(type, 1500);
    } else if (isDeleting && index === 0) {
        isDeleting = false;
        count = (count + 1) % texts.length;
        setTimeout(type, 500);
    }
}
type();


// Fitur belum jalan
document.querySelectorAll(".btn-view, .btn-code").forEach(btn => {
    btn.addEventListener("click", function(e) {
        e.preventDefault();
        alert("Fitur masih dalam perbaikan, tunggu update selanjutnya ya! 🚧");
    });
});


// Contoh Email kekirim
document.querySelector(".contact-form").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Message sent! (ini contoh aja)");
    this.reset();
});


// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    });
});