const library = [ // Отдел с книгами
    {name: 'Книга_1', age: 230},
    {name: 'Книга_2', age: 378},
    {name: 'Книга_3', age: 212},
    {name: 'Книга_4', age: 210},
    {name: 'Книга_5', age: 257},
    {name: 'Книга_6', age: 521},
    {name: 'Книга_7', age: 621},
]

library.sort((a, b) => a.age - b.age) // Сортировка по возрасту

const libraryFilter = (arr) => {
    return arr.filter(el => el.age > 300)
}

console.log('книги в библиотеке:\n')
library.forEach(e => { console.log(e.name, 'ее возраст:', e.age)} )

console.log('\n\nкниги старше 300 лет:\n') // Вывод списка книг старше 300 лет
libraryFilter(library).forEach(e=> { console.log(e.name) });

module.exports = libraryFilter