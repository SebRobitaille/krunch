// Nav toggle

const navToggle = document.getElementById("nav-toggle")
const mobileNav = document.getElementById("mobile-nav")
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")

navToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("active")
  navToggle.classList.toggle("active")
})

mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("active")
    navToggle.classList.remove("active")
  })
})
