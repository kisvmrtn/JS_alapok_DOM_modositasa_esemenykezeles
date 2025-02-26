window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    esemenyKezeles1();
    esemenyKezeles2();
    esemenyKezeles4();
});

function elemekElerese1() {
    let elem1 = document.getElementById('f1')
    console.log(elem1)
}

function elemekElerese2() {
    let elem2 = document.querySelectorAll("#ide")[0]
    elem2.innerHTML += '<p>Jó reggelt!</p>'
}

const elemekElerese3 = () => {
    let elem3 = document.querySelectorAll(".ide")[0]
    elem3.innerHTML += '<p>Jó reggelt!</p>'
}

const lista = []

const elemekElerese4 = () => {
    let elem4 = document.querySelectorAll('.lista')[0]
    let txt = `<ul>`
    for (let i = 0; i < 5; i++) {
        let szam = Math.random() * (30 - 10 + 1) + 10;
        lista.push(Math.floor(szam))
        txt += `<li>${lista[i]}</li>`
    }
    elem4.innerHTML += txt
    elem4.innerHTML += `</ul>`
    elem4.classList.add('formazott')
}

const esemenyKezeles1 = () => {
    let elem4 = document.querySelectorAll('.lista')[0]
    elem4.addEventListener("click", () => {
        const kattintasutanElem = document.querySelectorAll(".kattintasutan")[0];
        kattintasutanElem.appendChild(elem4)
    })
}

const esemenyKezeles2 = () => {
    let elem5 = document.querySelector('.feladat');
    elem5.innerHTML += '<button>OK</button>';

    let feladatGomb = document.querySelector('.feladat button');
    feladatGomb.addEventListener('click', () => {
        elem5.innerHTML += '<div id="kutyakep"> <img src="kepek/kutya.jpg" alt="kutyakep"> </div>'
        esemenyKezeles3();
    })
    console.log(elem5)
}

const esemenyKezeles3 = () => {
    let feladatKep = document.getElementById('kutyakep');
    console.log(feladatKep)
    feladatKep.addEventListener('mouseover', () => {
        feladatKep.classList.add('kephover')
    })
}

const esemenyKezeles4 = () => {
    let tarolo = document.querySelectorAll('.tarolo div')
    let megjelenito = document.querySelector('.megjelenito')
    for (let i = 0; i < tarolo.length; i++) {
        tarolo[i].addEventListener('click', () => {
            megjelenito.appendChild(tarolo[i])
        })  
    }
}