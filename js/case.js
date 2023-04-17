document.getElementById('btn-case-plus').addEventListener('click', function(){
    
    let inputCase = inputFieldUpdate(true, 'input-case');
    caseTotalFunction(inputCase);
    calculateSubTotal();
    calculateTotal()
    
});

document.getElementById('btn-case-minus').addEventListener('click', function(){
    let inputCase = inputFieldUpdate(false, 'input-case');
    caseTotalFunction(inputCase);
    calculateSubTotal();
    calculateTotal()
});