const checkAceess = (h, m) => {
    if (+h && +m){
        const bmi = m / (h / 100)**2
        return bmi.toFixed(2) <= 25.50 ? 'Вы можете участвовать' : 'Вы не можете участвовать'
    }
    else return 'Некорректный ввод'
}

/*
const height = prompt('Введите ваш рост')
const mass = prompt('Введите ваш вес')
alert(checkAceess(height, mass))
*/

console.log(checkAceess())

module.exports = checkAceess