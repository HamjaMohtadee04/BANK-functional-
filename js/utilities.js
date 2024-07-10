//define and get values from input field
function getInputFieldvaluebyId(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldvalueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldvalueString);
    inputField.value ='';
    return inputFieldValue;
}

//get amount or element value by innertext and different function
function getAmountValue(inputAmountID){
    const getAmount = document.getElementById(inputAmountID);
    const getAmountString = getAmount.innerText;
    const newAmount = parseFloat(getAmountString);
    return newAmount;
}

//set text
function setTextElementById(elementId,newValue){
        const textElement = document.getElementById(elementId);
        textElement.innerText = newValue;
}
