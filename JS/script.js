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
const logo = document.querySelector('.logo');

// Aggiungere l'evento click al logo
logo.addEventListener('click', reloadPage);

// Funzione per ricaricare la pagina
function reloadPage() {
  location.reload();
}

// Ottenere il pulsante per il toggle della modalità
const modeToggle = document.getElementById('darkModeToggle');
modeToggle.addEventListener('click', toggleMode);

// Funzione per attivare o disattivare la modalità
function toggleMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');

  // Aggiungere o rimuovere la classe "dark-mode" dal body
  if (body.classList.contains('dark-mode')) {
    // Modalità scura attivata
    localStorage.setItem('mode', 'dark'); // Salva lo stato della modalità nella cache del browser
  } else {
    // Modalità diurna attivata
    localStorage.setItem('mode', 'day'); // Salva lo stato della modalità nella cache del browser
  }
}

// Controllare lo stato della modalità all'avvio
document.addEventListener('DOMContentLoaded', () => {
  const mode = localStorage.getItem('mode');
  if (mode === 'dark') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
});
