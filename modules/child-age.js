document.querySelector('.check').addEventListener('click', checkAceess)


function checkAceess() {
    let age = document.querySelector('.in').value
    let result = document.querySelector('.result')
    
    if(age<6 && age>=0)
        result.innerHTML = 'Ребенок слишком мал'
    else if(age>=6 && age<=10)
        result.innerHTML = 'Младшая группа'
    else if(age>10 && age<=14)
        result.innerHTML = 'Средняя группа'
    else if(age>14 && age<18)
        result.innerHTML = 'Старшая группа'
    else if(age>=18)
        result.innerHTML = 'Взрослая группа'
    else if (age<0)
        result.innerHTML = 'Возраст не может быть отрицательным'
}