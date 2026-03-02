// --- SCRIPT UNTUK NAV ---
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");
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

// --- SCRIPT UNTUK EXPERIENCE ---
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".exp-img-slider").forEach((slider) => {
    const wrapper = slider.querySelector(".exp-img-wrapper");
    const images = slider.querySelectorAll("img");
    let index = 0;
    setInterval(() => {
      index++;
      if (index >= images.length) {
        index = 0;
      }
      wrapper.style.transform = "translateX(-" + index * 100 + "%)";
    }, 3000);
  });
});

// --- SCRIPT UNTUK HOME ---
window.addEventListener("load", function () {
  const element = document.getElementById("typing-text");
  if (!element) return;
  const text = element.textContent;
  element.textContent = "";
  element.style.opacity = 1;
  let index = 0;
  const speed = 15;
  function typeWriter() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    }
  }
  setTimeout(typeWriter, 1500);
});

// --- SCRIPT UNTUK SKILL ---
function toggleSkill(element) {
  element.classList.toggle("active");
}
