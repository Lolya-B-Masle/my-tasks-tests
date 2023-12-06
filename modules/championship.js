document.querySelector('.check-access').addEventListener('click', checkAceess)

function checkAceess() {
    let height = document.querySelector('.H-in').value
    let mass = document.querySelector('.M-in').value

    let BMI = mass / (height / 100)**2

    console.log(BMI)

    let result = document.querySelector('.result')

    BMI < 25.5 ? result.innerHTML = 'Вы можете участвовать' : result.innerHTML = 'Вы не можете участвовать'
}
