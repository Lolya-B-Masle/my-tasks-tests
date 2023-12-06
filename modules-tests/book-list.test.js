const libraryFilter = require('../modules/book-list');

describe(
    'Отбираем книги старше 300 лет',
    () => {
        const testCases = [
            {
                in: [
                    {name: 'Книга_1', age: 220},
                    {name: 'Книга_2', age: 760},
                    {name: 'Книга_3', age: 300},
                    {name: 'Книга_4', age: 240},
                    {name: 'Книга_5', age: 510},
                ],
                expected: [
                    {name: 'Книга_2', age: 760},
                    {name: 'Книга_5', age: 510}
                    
                ]
            },
            {
                in: [
                    {name: 'Книга_1', age: 331},
                    {name: 'Книга_2', age: 456},
                    {name: 'Книга_3', age: 342},
                    {name: 'Книга_4', age: 240},
                    {name: 'Книга_5', age: 278},
                ],
                expected: [
                    {name: 'Книга_1', age: 331},
                    {name: 'Книга_2', age: 456},
                    {name: 'Книга_3', age: 342}
                ]
            },
            {
                in: [
                    {name: 'Книга_1', age: 3231},
                    {name: 'Книга_2', age: 4156},
                    {name: 'Книга_3', age: 3462},
                    {name: 'Книга_4', age: 2440},
                    {name: 'Книга_5', age: 2758},
                ],
                expected: [
                    {name: 'Книга_1', age: 3231},
                    {name: 'Книга_2', age: 4156},
                    {name: 'Книга_3', age: 3462},
                    {name: 'Книга_4', age: 2440},
                    {name: 'Книга_5', age: 2758},
                ]
            },
            {
                in: [
                    {name: 'Книга_1', age: 231},
                    {name: 'Книга_2', age: 256},
                    {name: 'Книга_3', age: 262},
                    {name: 'Книга_4', age: 240},
                    {name: 'Книга_5', age: 258}
                ],
                expected: []
            },
        ];
        testCases.forEach(test => {
            it(
                `in : ${ test.in } \nexpected : ${ test.expected }`,
                ()=>{
                    const res = libraryFilter(test.in);
                    expect(res).toEqual(test.expected);
                }
            );
        })
    }
)