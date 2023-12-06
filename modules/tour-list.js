const Tour = class{  // Класс "Тур"
    name;   // Имя тура
    peopleAge;  // Возраст участников тура

    constructor(tName, tPeopleAge){     // Конструктор тура
        this.name = tName
        this.peopleAge = tPeopleAge
    }

    average(){ // метод для получения среднего арифметического возраста участников тура
        return this.peopleAge.reduce((total, value) => total + value) / this.peopleAge.length
    }
}

// -------------- Создание экземпляров класса "Тур". всего 4 тура ---------

const tour_1 = new Tour('tour_1', [12, 43, 23, 54, 23, 23, 65, 23, 32, 54])
const tour_2 = new Tour('tour_2', [32, 31, 26, 84, 63, 21, 15, 24, 22, 14])
const tour_3 = new Tour('tour_3', [12, 73, 26, 54, 22, 23, 61, 23, 31, 54])
const tour_4 = new Tour('tour_4', [12, 23, 29, 59, 93, 23, 15, 23, 32, 32])

// ------------------------------------------------------------------------

const tours = [tour_1, tour_2, tour_3, tour_4] // Список туров

console.log('Список туров по порядку:\n')
tours.forEach(e => { console.log(e.name, e.average()) });

tours.sort((a, b) => a.average() - b.average()) // Сортировка туров по среднему арифметическому возрасту

console.log('\n\nСписок туров в порядке возрастания среднего возраста участников:\n')
tours.forEach(e => { console.log(e.name, e.average()) });

module.exports = Tour