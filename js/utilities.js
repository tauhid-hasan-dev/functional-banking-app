function getInputValueById(inputId) {
    const inputTag = document.getElementById(inputId);
    const inputValueString = inputTag.value;
    const inputValue = parseFloat(inputValueString);
    inputTag.value = '';
    return inputValue;
}

function getElementValueById(elementId) {
    const elementTag = document.getElementById(elementId);
    //console.log(elementTag);
    const elementValueString = elementTag.innerText;
    const elementValue = parseFloat(elementValueString);
    elementTag.innerText = '';
    return elementValue;
}

function setInputValueToElement(elementId, inputValue) {
    const targetElement = document.getElementById(elementId);
    targetElement.innerText = inputValue;
}