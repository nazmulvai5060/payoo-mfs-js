document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();
        // console.log('money add btn clicked')

        const addMoneyInput = document.getElementById('input-add-money').value;
        const addMoneyNumber = parseFloat(addMoneyInput);
        const pinNumberInput = document.getElementById('input-pin-number').value;
        // console.log(addMoneyInput, pinNumberInput);

        if(pinNumberInput === '12345'){
            // console.log('Adding money to your account');

            const balance = document.getElementById('account-balance').innerText;
            console.log(balance);
            const balanceNumber = parseFloat(balance);

            const newBalance = balanceNumber + addMoneyNumber;
            console.log(newBalance);

            document.getElementById('account-balance').innerText = newBalance;

        }
        else{
            alert('Field to add money! Please try again');
        }

    })