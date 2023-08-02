function handleScroll() {
    var scrolledIndicator = document.getElementById("scrolled-indicator");
    if (window.pageYOffset > 300) {
        scrolledIndicator.style.display = "flex";
    } else {
        scrolledIndicator.style.display = "none";
    }
}

// Esegui la funzione handleScroll() all'avvio della pagina
handleScroll();

// Aggiungi un ascoltatore dell'evento scroll alla finestra
window.addEventListener("scroll", handleScroll);

const navbar = document.querySelector(".navbar");
const navbarToggler = document.querySelector(".navbar-toggler");
const mainContent = document.querySelector(".dark");

navbarToggler.addEventListener("click", function () {
  navbar.classList.toggle("open");
  if (navbar.classList.contains("open")) {
    mainContent.style.paddingTop = navbar.offsetHeight + "px";
  } else {
    mainContent.style.paddingTop = "0px";
  }
});