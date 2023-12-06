const check = require('../modules/child-age')

describe(
    'Определяем возрастную группу',
    () => {
        const testCases = [
            {
                in: 0,
                expected: 'Ребенок слишком мал'
            },
            {
                in: 90,
                expected: 'Взрослая группа'
            },
            {
                in: -5,
                expected: 'Возраст не может быть отрицательным'
            },
            {
                in: 'test',
                expected: 'Некорректный ввод'
            },
            {
                in: ['hello', 'world'],
                expected: 'Некорректный ввод'
            },
        ];
        testCases.forEach(test => {
            it(
                `in : ${ test.in } \nexpected : ${ test.expected }`,
                ()=>{
                    const res = check(test.in);
                    expect(res).toEqual(test.expected);
                }
            );
        })
    }
)