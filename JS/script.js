// Ottenere tutti i collegamenti del menu
const menuLinks = document.querySelectorAll('nav ul li a');

// Aggiungere l'evento click a ciascun collegamento
menuLinks.forEach(link => {
  link.addEventListener('click', scrollToSection);
});

// Funzione per lo scorrimento alla sezione corrispondente
function scrollToSection(event) {
  event.preventDefault();

  // Ottenere l'elemento target dell'evento click
  const target = event.target;
  const sectionId = target.getAttribute('href');

  // Controllo se l'elemento target è il link "Prodotti"
  if (sectionId === 'prodotti.html') {
    // Reindirizzamento alla pagina "prodotti.html"
    window.location.href = sectionId;
    return;
  }

  // Calcolare la posizione della sezione
  const section = document.querySelector(sectionId);
  const sectionPosition = section.offsetTop;

  // Scorrimento fluido alla sezione
  window.scrollTo({
    top: sectionPosition,
    behavior: 'smooth'
  });
}

// Ottenere il logo
const logo = document.querySelector('.Header-Logo');

// Aggiungere l'evento click al logo
logo.addEventListener('click', reloadPage);

// Funzione per ricaricare la pagina
function reloadPage() {
  location.reload();
}
