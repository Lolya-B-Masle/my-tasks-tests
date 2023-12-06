const check = age => {
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
    else 
        return 'Некорректный ввод'
}

//const age = prompt('Введите ворзраст ребенка и узнайте в какую возрастную группу он попадает'); alert(check(age))
console.log(check())

module.exports = check