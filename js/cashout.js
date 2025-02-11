document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('clicked the function')

    const inputCashOut = document.getElementById('input-cash-out').value;
    const cashOutNumber = parseFloat(inputCashOut);
    const inputPinCashOut = document.getElementById('cash-out-pin').value;
    // console.log(inputCashOut, inputPinCashOut);
    // const amountCashOut = document.getElementById('input-cash-out').value;
    // const amountPinNumber = document.getElementById('cash-out-pin').value;
    // console.log(amountCashOut, amountPinNumber);

    if(inputPinCashOut === '1234'){
        const balance2 = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance2);
        console.log(balance2);

        const newBalance2 = balanceNumber - cashOutNumber;
        console.log(newBalance2);


        document.getElementById('account-balance').innerText = newBalance2; 



    }

    else{
        alert('Field to cash out money!')
    }




})