const optionsDe = document.getElementById('optionsDe');
const optionsA = document.getElementById('optionsA');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
const resultado = document.getElementById('result');
const templateFooter = document.getElementById('template-footer').content;


const API_URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=ae865afc24626c58fe37f6c90bd8ba13'

// console.log(templateCard)
// console.log(templateFooter) 





document.addEventListener('DOMContentLoaded', () => {
    fetchData();
})

const fetchData = async () => {
    try {
        //  const res = await fetch('./data/api.json')
        const res = await fetch(API_URL)
        const data = await res.json();
        // const dataReady = data.rates
        // console.log(dataReady);

        // pintarOption1(data);   
        pintarOptions(data);



    } catch (error) {
        console.log(error)
    }

}

const pintarOptions= data => {  

    const dataReady = (data.rates)
   console.log(dataReady)

   Object.entries(dataReady).forEach(([key,value])=>{
    templateCard.querySelector('.convert').textContent = key
    templateCard.querySelector('.convert').value = value
    const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);




       console.log(key + ' ' + value)
   })
   optionsDe.appendChild(fragment);

   Object.entries(dataReady).forEach(([key,value])=>{
    templateCard.querySelector('.convert').textContent = key
    templateCard.querySelector('.convert').value = value
    const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);




       console.log(key + ' ' + value)
   })
   optionsA.appendChild(fragment);

}


/* const pintarOption1 = data =>{
    data.forEach(divisas=>{
        const {id,nombre,sigla,rate} = divisas;
        templateCard.querySelector('.convert').textContent = nombre;
        templateCard.querySelector('.convert').dataset.id = id;
        templateCard.querySelector('.convert').id = sigla;
        templateCard.querySelector('.convert').value = rate;
        

        // console.log(divisas)
        // console.log(nombre)
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    })
    optionsDe.appendChild(fragment);

    data.forEach(divisas=>{
        const {id,nombre,sigla,rate} = divisas;
        templateCard.querySelector('.convert').textContent = nombre;
        templateCard.querySelector('.convert').dataset.id = id;
        templateCard.querySelector('.convert').id = sigla;
        templateCard.querySelector('.convert').value = rate;
        

        // console.log(divisas)
        // console.log(nombre)
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    })
    optionsA.appendChild(fragment);
    


    
    
    
}   */