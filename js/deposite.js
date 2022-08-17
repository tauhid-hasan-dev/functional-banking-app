const btnDeposite = document.getElementById('btn-deposite');
btnDeposite.addEventListener('click', () => {

    //step-1 take the value from input
    const newDepositeAmount = getInputValueById('input-deposit');
    //console.log(newDepositeAmount);
    if (isNaN(newDepositeAmount)) {
        alert('Please enter a valid number');
        return;
    }

    //step-2 get the previous deposite total
    const previousDepositeTotal = getElementValueById('deposite-total');
    //console.log(previousDepositeTotal);

    //get the current deposite total
    const currentDepositeTotal = newDepositeAmount + previousDepositeTotal;

    //set the currentDepositeTotal to the deposite element
    setInputValueToElement('deposite-total', currentDepositeTotal);

    //add the new deposite amount to the current balance total
    const previousBalanceTotal = getElementValueById('balance-total');
    const currentBalanceTotal = previousBalanceTotal + newDepositeAmount;

    //set the current balance total to the balance total
    setInputValueToElement('balance-total', currentBalanceTotal);
})
