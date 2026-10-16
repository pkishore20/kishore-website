const yearElement = document.getElementById("yr");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// 2. Mobile Navigation Menu
const menu = document.getElementById("menu");
const toggle = document.getElementById("toggle");

if (menu && toggle) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("open");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
    });
  });
}

// 3. Rotating Job Roles
const roleElement = document.getElementById("role");

const roles = ["Laravel", "PHP", "REST APIs", "PostgreSQL", "MySQL"];

let roleIndex = 0;

if (roleElement) {
  roleElement.textContent = roles[roleIndex];

  setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    roleElement.textContent = roles[roleIndex];
  }, 2000);
}

// 4. Scroll Reveal Animation
const elements = document.querySelectorAll(".card, .item, .title");

elements.forEach((element) => {
  element.classList.add("reveal");
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    },
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
} else {
  elements.forEach((element) => {
    element.classList.add("show");
  });
}

// 5. Contact Form Submission
const form = document.getElementById("form");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.elements["name"]?.value.trim() || "";
    const email = form.elements["email"]?.value.trim() || "";
    const phone = form.elements["phone"]?.value.trim() || "";
    const message = form.elements["msg"]?.value.trim() || "";

    if (!name || !email || !message) {
      alert("Please fill in your name, email, and message.");
      return;
    }

    const subject = `Portfolio message from ${name}`;

    const body = [
      message,
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
    ].join("\n");

    const mailtoUrl =
      `mailto:kishorekumarpp20@gmail.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  });
}
