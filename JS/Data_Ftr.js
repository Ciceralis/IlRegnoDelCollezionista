const prodottiInPrimoPiano = [

    {
        img: 'https://www.ilregnodelcollezionista.com/uploads/2/0/8/0/20802814/s979250064653333777_p230_i2_w1596.png?width=640',
        name: '5 Franchi 1868 Belgio Re Leopoldo II in argento'
    },

    {
        img: 'https://www.ilregnodelcollezionista.com/uploads/2/0/8/0/20802814/s979250064653333777_p254_i1_w369.jpeg',
        name: '500 LIRE ARGENTO 1985 COLLEGIO DEL MONDO ADRIATICO FDC'
    },

    {
        img: 'https://www.ilregnodelcollezionista.com/uploads/2/0/8/0/20802814/s979250064653333777_p276_i1_w640.jpeg',
        name: 'Divisionale Francia 1976 con Argento FDC'
    },

    {
        img: 'https://www.ilregnodelcollezionista.com/uploads/2/0/8/0/20802814/s979250064653333777_p278_i1_w938.png?width=640',
        name: 'Divisionale Francia 1975 con Argento FDC'
    },

    {
        img: 'https://www.ilregnodelcollezionista.com/uploads/2/0/8/0/20802814/s979250064653333777_p281_i1_w1600.jpeg?width=640',
        name: 'U.S.A. Serie da 8 monete in argento prestigiosa delle Olimpiadi 1983'
    },

    {
        img: 'https://www.ilregnodelcollezionista.com/uploads/2/0/8/0/20802814/s979250064653333777_p366_i1_w864.jpeg?width=640',
        name: '10 euro 2005 Spagna Argento Eurostar Fondo specchio'
    },

    {
        img: 'https://www.ilregnodelcollezionista.com/uploads/2/0/8/0/20802814/s979250064653333777_p468_i1_w800.jpeg?width=640',
        name: '5 euro 2021 Italia Argento Maestro Ennio Morricone FDC'
    },

    {
        img: 'https://www.ilregnodelcollezionista.com/uploads/2/0/8/0/20802814/s979250064653333777_p469_i1_w500.jpeg',
        name: '5 euro 2020 PROOF Italia Eduardo De filippo FS'
    },

    {
        img: 'https://www.ilregnodelcollezionista.com/uploads/2/0/8/0/20802814/s979250064653333777_p470_i1_w1600.jpeg?width=640',
        name: '2022 Italia Divisionale zecca con 5 euro in Argento 100° Monza Autodromo'
    },

    {
        img: 'https://www.ilregnodelcollezionista.com/uploads/2/0/8/0/20802814/s979250064653333777_p270_i1_w384.jpeg',
        name: 'Italia 500 lire 1982 argento Giuseppe Garibaldi FDC'
    },
]

let prodottiInPrimoPianoHTML = '';
prodottiInPrimoPiano.forEach((product) => {
    prodottiInPrimoPianoHTML += `
    <li class="product">
        <img src="${product.img}">
        <div>${product.name}</div>
    </li>`

    document.querySelector('.product-list').innerHTML = prodottiInPrimoPianoHTML;
})