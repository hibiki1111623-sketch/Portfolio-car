const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const navLinks = document.querySelectorAll(".nav a");
const fadeItems = document.querySelectorAll(
  ".section-head, .intro-card, .about-image, .about-text, .service-card, .stock-card, .cta-inner, .news-item, .contact-info, .contact-form"
);

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-up", "show");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

fadeItems.forEach((item) => {
  item.classList.add("fade-up");
  observer.observe(item);
});