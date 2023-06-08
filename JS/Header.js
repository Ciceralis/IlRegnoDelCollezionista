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

document.getElementById('Search-Button').onclick = function() {
    document.getElementById('Header-Search-Bar').focus();
};

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
    console.log(JSON.parse(localStorage.getItem('bool')));
    window.location.href= "All_Products.html";
});

