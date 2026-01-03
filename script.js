gsap.registerPlugin(ScrollTrigger, TextPlugin);

/* AI Name typing */
gsap.to(".ai-name", {
    text: "Bhargav Sreevatsa",
    duration: 2.6,
    delay: 1
});
// Scroll Reveal Animation
const contact = document.getElementById("contact");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            contact.classList.add("show");
        }
    });
}, { threshold: 0.3 });

observer.observe(contact);

/* Cursor glow */
const cursor = document.querySelector(".cursor-glow");
document.addEventListener("mousemove", e => {
    gsap.to(cursor, { x: e.clientX - 9, y: e.clientY - 9, duration: .2 });
});

/* Scroll progress */
window.addEventListener("scroll", () => {
    const h = document.documentElement;
    document.getElementById("scroll-progress").style.width =
        (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100 + "%";
});
/* Section reveal */
gsap.utils.toArray(".reveal").forEach(sec => {
    gsap.to(sec, {
        opacity: 1, y: 0, duration: 1.2,
        scrollTrigger: { trigger: sec, start: "top 80%" }
    });
});

const arrow = document.querySelector(".scroll-arrow");

/* GSAP Bounce Animation */
gsap.to(arrow, {
    y: 15,
    duration: 1.2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

// hamburger menu code
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("open");
});

/* Close menu on click */
document.querySelectorAll(".menu-section a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        menu.classList.remove("open");
    });
});

/* Show floating hamburger on scroll */
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    // Show only after scrolling a bit
    if (currentScrollY < 120) {
        hamburger.style.opacity = "0";
        hamburger.style.transform = "translateY(-10px)";
        return;
    }

    // Scrolling DOWN → hide
    if (currentScrollY > lastScrollY) {
        hamburger.style.opacity = "0";
        hamburger.style.transform = "translateY(-12px)";
    }
    // Scrolling UP → show
    else {
        hamburger.style.opacity = "1";
        hamburger.style.transform = "translateY(0)";
    }

    lastScrollY = currentScrollY;
});
