// console.log('Ashik bolod toi')

document.getElementById('btn-show-cash-out')
.addEventListener('click', function(){


    document.getElementById('cash-out-from').classList.remove('hidden');

    document.getElementById('add-money-from').classList.add('hidden');

});

document.getElementById('btn-show-add-money')
.addEventListener('click', function(){
    document.getElementById('add-money-from').classList.remove('hidden');
    document.getElementById('cash-out-from').classList.add('hidden');


})