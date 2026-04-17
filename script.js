let head = document.querySelector("header");
window.addEventListener("scroll", () => {
    head.classList.toggle("stick", window.scrollY > 150);
});