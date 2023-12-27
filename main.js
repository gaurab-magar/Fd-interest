function fdCalculate (){
    let amount = parseFloat(document.querySelector('#amount').value);
    let interest = parseFloat(document.querySelector('#interest').value);
    let tenure = parseFloat(document.querySelector('#tenure').value);
    let btn = document.querySelector('#submit');
    let result = document.querySelector('#result');

    let maturityAmount = amount+(amount*interest*tenure)/100;
    result.innerHTML = `maturity Amount: ${maturityAmount.toFixed(2)}`;
};



addEventListener('click', fdCalculate);
