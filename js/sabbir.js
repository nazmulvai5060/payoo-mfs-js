// console.log('explore more the very simple')

document.getElementById('button-login')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const phoneNumber = document.getElementById('phone-number').value;
        const pinNumber = document.getElementById('pin-number').value;
        // 

        if (phoneNumber === '01745866680' && pinNumber === '1234') {
            console.log('You are logged in ');
            window.location.href = '/safin.html'
        }
        else {
            alert('Wrong phone number or pin.')
        }
    })