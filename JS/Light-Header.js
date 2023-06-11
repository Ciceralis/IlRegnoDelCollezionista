// Scopri di più

function showDescription()
{
    let newHTML = '';
    newHTML += 
    `<ul class = "Page-Description">
        <li class = "Page-Description-Title">
            Benvenuto nel meraviglioso mondo de "Il Regno Del Collezionista"! 
        </li>
        <li class="par">Qui troverai una vasta selezione di monete e banconote da collezionismo, perfette per soddisfare ogni appassionato.</li>
        <li class="par">Espola i nostri prodotti provenienti da ogni paese!</li>
        <li class="par">Tutte le nostre monete sono organizzate in blister per garantirne la qualtità.</li>
        <li class="par">Offriamo anche un sistema all'avanguardia per la sicurezza delle nostre monete e banconote</li>
        <li class="par">Entra nel magico mondo del collezionismo e lasciati stupire dai nostri meravigliosi prodotti</li>
    </ul>`
    document.querySelector('.hero').innerHTML = newHTML;

}

function hideDescription()
{
    document.querySelector('.hero').innerHTML = `
    <h1>Benvenuto nel Regno Del Collezionista</h1>
    <p>Scopri la magia delle monete rare e uniche.</p>
    <a href="#">
        <button class = "Scopri-Di-Piu-Button" onclick="showDescription();">
            Scopri di più
        </button>
    </a>
    `
}

// barra di ricerca
const searchButton = document.getElementById("Search-Button");
searchButton.addEventListener('click', () => {
    console.log('hello there');
    document.getElementById("Header-Search-Bar").focus();
})

let isVisibleArray = [];
const searchBar = document.getElementById("Header-Search-Bar");
searchBar.addEventListener("change", (e) => {
    const value = e.target.value.toLowerCase();
    localStorage.removeItem('bool');
    isVisibleArray = [];
    allProducts.forEach(product => {
        const isVisible = product.name.toLowerCase().includes(value);
        isVisibleArray.push(isVisible);
        localStorage.setItem('bool', JSON.stringify(isVisibleArray));
    })
    searchBar.value = '';
    window.location.href= "!Light-All_Products.html";

});

// Responsive Header

function compressHeader(size) 
{
    const normalLeftHeaderHTML = `
        <div class="Mode-Toggle-Container">
            <a id="darkModeToggle" href = "IlRegnoDelCollezionista.html">
                <img id="dark/light" src= "Images/Icons/Dark-Mode-Toggle.svg" class = "Dark-Mode-Image">
            </a>
        </div>
        <a href="!Light-IlRegnoDelCollezionista.html" class = "Header-Hidden-Link">
            Home
        </a>
        <a id="Monete" href="!Light-Monete.html" class = "Header-Hidden-Link">
            Monete
        </a>
        <a id="Banconote" href="!Light-Banconote.html" class = "Header-Hidden-Link">
            Banconote
        </a>
        <a id="Contatti" href="!Light-Contatti.html" class = "Header-Hidden-Link">
            Contatti
        </a>

        <a id = "Carrello" href = "./!Light-Carrello.html" class = "Cart-Container">
            <img id="cart" src = "Images/Icons/Cart.png" class = "Cart-Icon">
            <div class = "Cart-Number">
            0
            </div>
        </a>
    `
    const compressLeftHeaderHTML = `
        <div class="Mode-Toggle-Container">
            <a id="darkModeToggle" href = "IlRegnoDelCollezionista.html">
                <img id="dark/light" src= "Images/Icons/Dark-Mode-Toggle.svg" class = "Dark-Mode-Image">
            </a>
        </div>

        <div class = "Hamburger-Menu-Icon-Container">
            <img src = "Images/Icons/Hamburger-Menu.svg" class = "Hamburger-Menu-Icon" id = "Hamburger-Menu-Icon">
        </div>
    `

    const compressRightHeaderHTML = `
        <div class = "Header-Logo-Container">
            <img src = "Images/logo.png" class = "Header-Logo">
        </div>
    `

    const normalRightHeaderHTML = `
        <div class = "Header-Logo-Container">
            <img src = "Images/logo.png" class = "Header-Logo">
        </div>

        <a href="./!Light-IlRegnoDelCollezionista.html"  class = "Header-Title">
            Il Regno Del Collezionista
        </a>
    `
    if (size.matches) 
    {
        document.getElementById('Left-Section').innerHTML = compressLeftHeaderHTML;
        document.getElementById('Right-Section').innerHTML = compressRightHeaderHTML;
        a++;
    }
    else
    {
        document.getElementById('Left-Section').innerHTML = normalLeftHeaderHTML;
        document.getElementById('Right-Section').innerHTML = normalRightHeaderHTML;
        if(a%2===0){
            location.reload();
        }
    }
}

let size = window.matchMedia("(max-width: 1000px)");
let a=1;
compressHeader(size);
size.addListener(compressHeader);

document.getElementById("Header").innerHTML = `
    <div id="Head" class = "Header">
        <div class = "Right-Section" id = "Right-Section">
            <div class = "Header-Logo-Container">
                <img src = "Images/logo.png" class = "Header-Logo">
            </div>

            <a href="!Light-IlRegnoDelCollezionista.html"  class = "Header-Title">
                Il Regno Del Collezionista
            </a>
        </div>

        <div class = "Middle-Section">
            <button id = "Search-Button" class = "Header-Search-Button">
            <img src = "Images/Icons/Search-Icon.svg" class = "Header-Search-Icon">
            </button>
            <input placeholder="Cerca per Nome" class = "Header-Search-Bar" id = "Header-Search-Bar">
        </div>

        <nav class = "Left-Section" id = "Left-Section">
            <div class="Mode-Toggle-Container">
                <a id="darkModeToggle" href = "IlRegnoDelCollezionista.html">
                    <img id="dark/light" src= "Images/Icons/Dark-Mode-Toggle.svg" class = "Dark-Mode-Image">
                </a>
            </div>
            <a href="!Light-IlRegnoDelCollezionista.html" class = "Header-Hidden-Link">
                Home
            </a>
            <a id="Monete" href="!Light-Monete.html" class = "Header-Hidden-Link">
                Monete
            </a>
            <a id="Banconote" href="!Light-Banconote.html" class = "Header-Hidden-Link">
                Banconote
            </a>
            <a id="Contatti" href="!Light-Contatti.html" class = "Header-Hidden-Link">
                Contatti
            </a>

            <a id = "Carrello" href = "./!Light-Carrello.html" class = "Cart-Container">
                <img id="cart" src = "Images/Icons/Cart-Black.png" class = "Cart-Icon">
                <div class = "Cart-Number">
                0
                </div>
            </a>
        </nav>
    </div>
`
