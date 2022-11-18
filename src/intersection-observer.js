let heroSection
let sections
window.addEventListener(
  "load",
  (event) => {
    heroSection = document.getElementById("top")
    sections = document.querySelectorAll("section")
    createObserver()
  },
  false
)

function createObserver() {
  let observer

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList(),
  }

  observer = new IntersectionObserver(handleIntersect, options)
  observer.observe(heroSection)
  sections.forEach((section) => {
    observer.observe(section)
  })
}

function buildThresholdList() {
  let thresholds = []
  let numSteps = 1

  for (let i = 1.0; i <= numSteps; i++) {
    let ratio = i / numSteps
    thresholds.push(ratio)
  }

  thresholds.push(0)
  return thresholds
}

function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.boundingClientRect.y < 0) {
      entry.target.classList.add("active-section")
      let id = entry.target.getAttribute("id")
      console.log(id)
    } else {
      entry.target.classList.remove("active-section")
    }
  })
}

// const navLinks = document.querySelectorAll(".nav-link")
// navLinks.forEach((navLink) => {
//   let href = navLink.getAttribute("href")
//   console.log(href.slice(1, href.length))
// })

// function highlightActive(section) {
//   let highlightColor = "#0082f3"
// }
