
let price = [13, 22, 34]

let priceText = document.getElementsByClassName('card__text')
let planRadio = document.getElementsByName('plan')
let totalText = document.querySelector('.total__text')
let select = document.querySelector('select')
let selectedPlan = document.querySelector('.selected__plan')


for (let i = 0; i<priceText.length; i++) {
    priceText[i].innerHTML = '$' + price[i] + ' per license'
}

let addText = (text) => {
    return '$' + text
} 

for (let i=0; i<planRadio.length; i++) {
    planRadio[i].addEventListener('click', function() {
        totalText.innerHTML = addText(select.value * price[i])
        select.addEventListener('change', function() {
            totalText.innerHTML = addText(select.value * price[i])
        })
    })
}




