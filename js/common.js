function inputFieldUpdate(isIncrease, fieldId){
    let inputField = document.getElementById(fieldId);
    let input = parseInt(inputField.value);

    if (isIncrease === true){
        input++;
    }

    else {
        input--;
    }
    inputField.value = input;

    return input;
   
};

function phoneTotalFunction(inputPhone){
    let phoneTotalValue = document.getElementById('phone-total');
    let phoneTotalFinal = inputPhone * 1219;
    phoneTotalValue.innerText = phoneTotalFinal;
};

function caseTotalFunction(inputCase){
    let caseTotalValue = document.getElementById('case-total');
    let caseTotalFinal = inputCase * 59;
    caseTotalValue.innerText = caseTotalFinal;
};

function getInnerTextById(elementId){
    let fieldTotalElement = document.getElementById(elementId);
    let fieldTotal = parseInt(fieldTotalElement.innerText);

    return fieldTotal;
};

function calculateSubTotal(){
    
    let phoneTotal = getInnerTextById('phone-total');
    let caseTotal = getInnerTextById('case-total');
    let currentTotal = phoneTotal + caseTotal;
    let subTotal = document.getElementById('sub-total');
    subTotal.innerText = currentTotal;
}

function calculateTotal(){
    let subTotal = getInnerTextById('sub-total');
    let total = (subTotal * 0.1).toFixed(2);;
    let subTotalField = document.getElementById('total');
    subTotalField.innerText = total;
};