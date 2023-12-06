const Box = class{      // Класс "Коробка"
    name;
    length;
    width;
    height;

    constructor(bName, bLength, bWidth, bHeight) { // Конструктор класса
        this.name = bName
        this.length = bLength
        this.width = bWidth
        this.height = bHeight
    }

    getVolume() { // Объем коробки
        return (this.length*this.width*this.height) / 10
    }
}

const sortBoxes = (arr) => {
    arr.forEach(box => {      
        let vol = box.getVolume()
    
        if (vol > 0 && vol < 5) smallBoxes.push(box);
    
        else if (vol > 5 && vol < 15) mediumBoxes.push(box);
    
        else largeBoxes.push(box);
    
    });
}

// --------- Создание коробок ---------

const box_1 = new Box('box_1', 5, 3, 5)
const box_2 = new Box('box_2', 4, 9, 6)
const box_3 = new Box('box_3', 2, 3, 2)
const box_4 = new Box('box_4', 8, 6, 2)
const box_5 = new Box('box_5', 1, 3, 1)
const box_6 = new Box('box_6', 6, 3, 9)
const box_7 = new Box('box_7', 7, 7, 2)
const box_8 = new Box('box_8', 9, 4, 6)

// ------------------------------------

const smallBoxes = []      // Список для маленьких коробок
const mediumBoxes = []     // Список для средних коробок
const largeBoxes = []      // Список для больших коробок

const boxes = [  // Общий список с коробками
    box_1,
    box_2,
    box_3,
    box_4,
    box_5,
    box_6,
    box_7,
    box_8
]

sortBoxes(boxes) // Распределение коробок по объему

console.log('Маленькие коробки: \n')
smallBoxes.forEach(e => {console.log('коробка', e.name, 'объемом', e.getVolume())});

console.log('\n\nСредние коробки: \n')
mediumBoxes.forEach(e => {console.log('коробка', e.name, 'объемом', e.getVolume())});

console.log('\n\nБольшие коробки: \n')
largeBoxes.forEach(e => {console.log('коробка', e.name, 'объемом', e.getVolume())});

module.exports = Box

