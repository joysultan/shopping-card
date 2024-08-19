function updateCaseNumber(isIncrease){
    const caseField = document.getElementById('case-field');
    const caseFieldString = caseField.value;
    const previousCaseNumber = parseInt(caseFieldString);
    let newCaseNumber;
    if(isIncrease=== true){
        newCaseNumber = previousCaseNumber +1;
    }
    else{
        newCaseNumber = previousCaseNumber -1;

    }
    caseField.value = newCaseNumber;
    return newCaseNumber;
}
function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}