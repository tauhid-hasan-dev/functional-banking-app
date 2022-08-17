const btnWithdraw = document.getElementById('btn-withdraw');
btnWithdraw.addEventListener('click', () => {
    //get the value form input tag
    const newWithdrawAmount = getInputValueById('input-withdraw');
    //console.log(newWithdrawAmount)
    //clear the input field

    if (isNaN(newWithdrawAmount)) {
        alert('Please enter a valid number');
        return;
    }

    //get the withdraw element value 
    const previousWithdrawTotal = getElementValueById('withdraw-total');
    //console.log(previousWithdrawTotal)

    //substract the new deposite amount to the current balance total
    const previousBalanceTotal = getElementValueById('balance-total');
    //console.log(previousBalanceTotal);
    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Withdraw amount should be less than your total balance');
        return;
    }
    //get the total withdraw
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    //set the current withdraw total to the withdraw element
    setInputValueToElement('withdraw-total', currentWithdrawTotal);

    //set the substracted balnce total from console to client side element
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setInputValueToElement('balance-total', currentBalanceTotal);


})

