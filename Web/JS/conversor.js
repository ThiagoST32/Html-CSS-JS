const form = document.getElementById('form');
form.addEventListener('submit',handleSubmit)

const inputValue = document.getElementById('value-real');
const selectedCurrency = document.getElementById('currency');
const result = document.getElementById('result');
let valueConverter = 0;

function handleSubmit (e){
    e.preventDefault();
    
    if(!inputValue.value || inputValue.value < 0){
        alert("Informe um Valor Correto!");
        return;
    }
    else if(!selectedCurrency.value){
        alert("Escolha a moeda!");
        return;

    }
    converter();
};

function converter(){
    if(selectedCurrency.value === 'eur'){
        valueConverter = inputValue.value / 5.51;
        result.innerHTML = valueFormater ('pt-BR', 'EUR');
        
        animateResult();
    }else if(selectedCurrency.value === 'dol'){
        valueConverter = inputValue.value  / 5;
        result.innerHTML = valueFormater('en-US','USD');

        animateResult();
    }

    inputValue.value = '';
    selectedCurrency.value = '';
};

function valueFormater(locate,currency){
    const value = valueConverter.toLocaleString(`${locate}`,{style: 'currency', currency:  `${currency}`});
    return `<span>🤑</span> ${value} <span>🤑</span>`;

};

function animateResult(){
    return result.animate([
    {transform:'translateY (-150px)'},
    {transform:'translateY (0px)'},
    ],{duration: 1500});
};