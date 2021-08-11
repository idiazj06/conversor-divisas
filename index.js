const optionsDe = document.getElementById('optionsDe');
const optionsA = document.getElementById('optionsA');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();

console.log(templateCard)





document.addEventListener('DOMContentLoaded', ()=>{
    fetchData();
})

const fetchData = async ()=>{
    try {
        const res = await fetch('./data/api.json')
        const data = await res.json();
        
        pintarOption1(data);
        
        console.log(data)

        // console.log(data)
    }catch (error){
        console.log(error)
    }
    
}

 const pintarOption1 = data =>{
    data.forEach(divisas=>{
        const {id,nombre,sigla} = divisas;
        templateCard.querySelector('.convert').textContent = nombre;
        templateCard.querySelector('.convert').dataset.id = id;
        templateCard.querySelector('.convert').id = sigla;
        templateCard.querySelector('.convert').value = sigla;
        

        // console.log(divisas)
        // console.log(nombre)
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    })
    optionsDe.appendChild(fragment);

    data.forEach(divisas=>{
        const {id,nombre,sigla} = divisas;
        templateCard.querySelector('.convert').textContent = nombre;
        templateCard.querySelector('.convert').dataset.id = id;
        templateCard.querySelector('.convert').id = sigla;
        templateCard.querySelector('.convert').value = sigla;
        

        // console.log(divisas)
        // console.log(nombre)
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    })
    optionsA.appendChild(fragment);
    
} 



