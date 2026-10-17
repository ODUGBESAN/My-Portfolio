const menuButton = document.querySelector(".menu-toggle")
const navigation = document.querySelector(".site-nav")

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true"
  menuButton.setAttribute("aria-expanded", String(!isOpen))
  menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation")
  navigation.classList.toggle("open", !isOpen)
})

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton?.setAttribute("aria-expanded", "false")
    menuButton?.setAttribute("aria-label", "Open navigation")
    navigation.classList.remove("open")
  })
})

document.querySelector("#year").textContent = new Date().getFullYear()

const revealItems = document.querySelectorAll(".reveal")
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.12 })
  revealItems.forEach((item) => revealObserver.observe(item))
} else {
  revealItems.forEach((item) => item.classList.add("visible"))
}
