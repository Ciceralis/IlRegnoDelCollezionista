const banconoteAngola = [
    {
        img: 'Images/Banconote/Angola/1.jpeg',
        name: 'Set 2 banconote Angola 5 e 10 Kwanzas FDS'
    },

    {
        img: 'Images/Banconote/Angola/2.jpeg',
        name: 'Set Angola 2 banconote 200 e 500 Kwanzas 2020 FDS'
    }
]

const banconoteCongo = [
    {
        img: 'Images/Banconote/Congo/1.jpeg',
        name: 'Congo 1 banconota da 100 Franchi FDS'
    },

    {
        img: 'Images/Banconote/Congo/2.jpeg',
        name: 'Congo banconota da 200 Franchi FDS'
    },

    {
        img: 'Images/Banconote/Congo/3.jpeg',
        name: 'Congo banconota da 10 Franchi 1997 Verdi FDS'
    },

    {
        img: 'Images/Banconote/Congo/4.jpeg',
        name: 'Congo banconota da 20 Franchi 2003 Verdi FDS'
    },

    {
        img: 'Images/Banconote/Congo/5.jpeg',
        name: 'Congo banconota da 50 Franchi 2013 FDS'
    },

    {
        img: 'Images/Banconote/Congo/6.jpeg',
        name: 'Congo banconota da 500 Franchi 2013 FDS'
    },

    {
        img: 'Images/Banconote/Congo/7.jpeg',
        name: 'Congo banconota da 1000 Franchi 2020 FDS'
    }
]

const banconoteMarocco = [
    {
        img: 'Images/Banconote/Marocco/1.jpeg',
        name: 'Marocco Banconota da 20 Dirham FDS'
    },

    {
        img: 'Images/Banconote/Marocco/2.jpeg',
        name: 'Marocco Banconota da 50 Dirham FDS'
    }
]

const banconoteBielorussia = [
    {
        img: 'Images/Banconote/Bielorussia/1.jpeg',
        name: 'Bielorussia 1 banconota da 50 Rubli FDS'
    }
]

const banconoteAfghanistan = [
    {
        img: 'Images/Banconote/Afghanistan/1.jpeg',
        name: 'Set 2 banconote Afghanistan 1 e 2 Afgani FDS'
    },

    {
        img: 'Images/Banconote/Afghanistan/2.jpeg',
        name: 'Set 3 banconote Afghanistan 100, 500 e 1000 Afgani FDS'
    }
]

const banconoteCambogia = [
    {
        img: 'Images/Banconote/Cambogia/1.jpeg',
        name: 'Cambogia 1 banconota da 200 Rials FDS'
    },

    {
        img: 'Images/Banconote/Cambogia/2.jpeg',
        name: 'Cambogia 1 banconota da 50 Rials FDS'
    },

    {
        img: 'Images/Banconote/Cambogia/3.jpeg',
        name: 'Cambogia 1 banconota da 100 Rials FDS'
    }
]

const banconoteBahamas = [
    {
        img: 'Images/Banconote/Bahamas/1.jpeg',
        name: 'Set 3 banconote da mezzo dollaro Bahamas FDS'
    }
]

const banconoteCina = [
    {
        img: 'Images/Banconote/Cina/1.jpeg',
        name: 'Banconota Cina 100 Yuan'
    },

    {
        img: 'Images/Banconote/Cina/2.jpeg',
        name: 'Set di banconote Cina 1,5,10 yuan 2019 2020 FDS'
    },

    {
        img: 'Images/Banconote/Cina/3.jpeg',
        name: '1 banconota Cina 1 yuan FDS'
    }
]

const banconoteIndonesia = [
    {
        img: 'Images/Banconote/Indonesia/1.jpeg',
        name: 'Indonesia 1 banconota da 1000 Rupies FDS'
    },

    {
        img: 'Images/Banconote/Indonesia/2.jpeg',
        name: 'Indonesia banconota da 1000 Rupiah 2022 FDS'
    },

    {
        img: 'Images/Banconote/Indonesia/3.jpeg',
        name: 'Indonesia banconota da 2000 Rupiah 2022 FDS'
    },

    {
        img: 'Images/Banconote/Indonesia/4.jpeg',
        name: 'Indonesia set 3 banconote 1000, 2000 e 5000 Rupiah 2016 FDS'
    }
]

const banconoteMongolia = [
    {
        img: 'Images/Banconote/Mongolia/1.jpeg',
        name: 'Set 6 banconote Mongolia FDS vari tagli'
    }
]

const banconoteSerbia = [
    {
        img: 'Images/Banconote/Serbia/1.jpeg',
        name: 'Serbia Set Banconote 3 pezzi, 10, 20 e 50 Dinara FDS'
    }
]

const banconoteGiappone = [
    {
        img: 'Images/Banconote/Giappone/1.jpeg',
        name: 'Giappone 1 banconota da 100 yen FDS'
    }
]

let banconoteAngolaHTML = '';
banconoteAngola.forEach((product) => {
    banconoteAngolaHTML += `
    <li class="product">
        <img src="${product.img}">
        <div>${product.name}</div>
    </li>`

    document.getElementById("Products-Banconote-Angola").innerHTML = banconoteAngolaHTML;
})

let banconoteCongoHTML = '';
banconoteCongo.forEach((product) => {
    banconoteCongoHTML += `
    <li class="product">
        <img src="${product.img}">
        <div>${product.name}</div>
    </li>`

    document.getElementById("Products-Banconote-Congo").innerHTML = banconoteCongoHTML;
})

let banconoteMaroccoHTML = '';
banconoteMarocco.forEach((product) => {
    banconoteMaroccoHTML += `
    <li class="product">
        <img src="${product.img}">
        <div>${product.name}</div>
    </li>`

    document.getElementById("Products-Banconote-Marocco").innerHTML = banconoteMaroccoHTML;
})

let banconoteBielorussiaHTML = '';
banconoteBielorussia.forEach((product) => {
    banconoteBielorussiaHTML += `
    <li class="product">
        <img src="${product.img}">
        <div>${product.name}</div>
    </li>`

    document.getElementById("Products-Banconote-Bielorussia").innerHTML = banconoteBielorussiaHTML;
})

let banconoteAfghanistanHTML = '';
banconoteAfghanistan.forEach((product) => {
    banconoteAfghanistanHTML += `
    <li class="product">
        <img src="${product.img}">
        <div>${product.name}</div>
    </li>`

    document.getElementById("Products-Banconote-Afghanistan").innerHTML = banconoteAfghanistanHTML;
})

let banconoteCambogiaHTML = '';
banconoteCambogia.forEach((product) => {
    banconoteCambogiaHTML += `
    <li class="product">
        <img src="${product.img}">
        <div>${product.name}</div>
    </li>`

    document.getElementById("Products-Banconote-Cambogia").innerHTML = banconoteCambogiaHTML;
})

let banconoteBahamasHTML = '';
banconoteBahamas.forEach((product) => {
    banconoteBahamasHTML += `
    <li class="product">
        <img src="${product.img}">
        <div>${product.name}</div>
    </li>`

    document.getElementById("Products-Banconote-Bahamas").innerHTML = banconoteBahamasHTML;
})

let banconoteCinaHTML = '';
banconoteCina.forEach((product) => {
    banconoteCinaHTML += `
    <li class="product">
        <img src="${product.img}">
        <div>${product.name}</div>
    </li>`

    document.getElementById("Products-Banconote-Cina").innerHTML = banconoteCinaHTML;
})

let banconoteIndonesiaHTML = '';
banconoteIndonesia.forEach((product) => {
    banconoteIndonesiaHTML += `
    <li class="product">
        <img src="${product.img}">
        <div>${product.name}</div>
    </li>`

    document.getElementById("Products-Banconote-Indonesia").innerHTML = banconoteIndonesiaHTML;
})

let banconoteMongoliaHTML = '';
banconoteMongolia.forEach((product) => {
    banconoteMongoliaHTML += `
    <li class="product">
        <img src="${product.img}">
        <div>${product.name}</div>
    </li>`

    document.getElementById("Products-Banconote-Mongolia").innerHTML = banconoteMongoliaHTML;
})

let banconoteSerbiaHTML = '';
banconoteSerbia.forEach((product) => {
    banconoteSerbiaHTML += `
    <li class="product">
        <img src="${product.img}">
        <div>${product.name}</div>
    </li>`

    document.getElementById("Products-Banconote-Serbia").innerHTML = banconoteSerbiaHTML;
})

let banconoteGiapponeHTML = '';
banconoteGiappone.forEach((product) => {
    banconoteGiapponeHTML += `
    <li class="product">
        <img src="${product.img}">
        <div>${product.name}</div>
    </li>`

    document.getElementById("Products-Banconote-Giappone").innerHTML = banconoteGiapponeHTML;
})
