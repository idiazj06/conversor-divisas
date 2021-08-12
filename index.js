import {
    data
} from './data/data.js';
console.log(data)

const items = document.getElementById('items');
let opcionesEn = document.querySelector('.opcionesEn')
let opcionesSal = document.querySelector('.opcionesSal')
let resultado = document.querySelector('#converResult')


// console.log(resultado)

const fragment = document.createDocumentFragment();


data.forEach(valores => {
    const {
        id,
        sigla,
        nombre,
        rate
    } = valores

    const item = document.createElement('option')
    item.setAttribute('value', rate)
    item.dataset.id = id
    item.setAttribute('id', sigla)
    item.textContent = nombre

    fragment.appendChild(item)
})

opcionesEn.appendChild(fragment)

data.forEach(valores => {
    const {
        id,
        sigla,
        nombre,
        rate
    } = valores

    const item = document.createElement('option')
    item.setAttribute('value', rate)
    item.dataset.id = id
    item.setAttribute('id', sigla)
    item.textContent = nombre


    fragment.appendChild(item)

})
opcionesSal.appendChild(fragment)

// console.log(opcionesEn.value)
// console.log(opcionesSal)

 form.addEventListener('submit', (e) => {
    e.preventDefault();

    const montoConvert = document.querySelector('#montoConvert').value;
    
    // console.log(montoConvert)
    

    const cambioEn = opcionesEn.value;
    const cambioSal = opcionesSal.value;

    let resultadoConversion = montoConvert * cambioSal / cambioEn

   


    if(montoConvert <= 0 || isNaN(montoConvert)==true) {
        resultado.textContent = 'ERROR'
    }else{

        resultado.textContent = resultadoConversion.toFixed(5);    }
}) 