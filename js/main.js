// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// Typewriter Effect (simple version)
const typewriter = document.getElementById('typewriter');
if (typewriter) {
    const text = typewriter.innerText;
    typewriter.innerText = '';
    let j = 0;
    function type() {
        if (j < text.length) {
            typewriter.innerText += text.charAt(j);
            j++;
            setTimeout(type, 100);
        }
    }
    type();
}

// Active Nav Link
const currentPath = window.location.pathname.split("/").pop() || "index.html";
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPath) {
        link.classList.add("active");
    } else {
        link.classList.remove("active");
    }
});
