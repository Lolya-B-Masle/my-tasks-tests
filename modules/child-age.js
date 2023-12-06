document.querySelector('.check').addEventListener('click', checkAceess)

function checkAceess() {
    let age = document.querySelector('.in').value
    let result = document.querySelector('.result')
    
    const check = (age) => {
        if(age<6 && age>=0)
            return 'Ребенок слишком мал'
        else if(age>=6 && age<=10)
            return 'Младшая группа'
        else if(age>10 && age<=14)
            return 'Средняя группа'
        else if(age>14 && age<18)
            return 'Старшая группа'
        else if(age>=18)
            return 'Взрослая группа'
        else if (age<0)
            return 'Возраст не может быть отрицательным'
    }

    result.innerHTML = check(age)
}

module.exports = check