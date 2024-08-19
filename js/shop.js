
document.getElementById('btn-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);
 
    updateCaseTotalPrice(newCaseNumber)
   
})

document.getElementById('btn-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber)
})

