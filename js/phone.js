document.getElementById('btn-phone-plus').addEventListener('click', function(){
    
    let inputPhone = inputFieldUpdate(true, 'input-phone');
    phoneTotalFunction(inputPhone);
    calculateSubTotal();
    calculateTotal()
    
    
});

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    let inputPhone = inputFieldUpdate(false, 'input-phone');
    phoneTotalFunction(inputPhone);
    calculateSubTotal();
    calculateTotal()
});