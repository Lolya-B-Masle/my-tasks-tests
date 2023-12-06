const Box = require('../modules/box-list');

const box_1 = new Box('box_1', 5, 3, 5)
const box_2 = new Box('box_2', 4, 9, 6)
const box_3 = new Box('box_3', 2, 3, 2)
const box_4 = new Box('box_4', 8, 6, 2)
const box_5 = new Box('box_5', 1, 3, 1)
const box_6 = new Box('box_6', 2, 3, 3)
const box_7 = new Box('box_7', 7, 7, 2)
const box_8 = new Box('box_8', 9, 4, 6)

test('vol 1', () => {
    expect(box_1.getVolume()).toBe(7.5);
});

describe(
    'Коробки малого размера',
    () => {
        const testCases = [
            {
                in: [
                    box_1.getVolume(),
                    box_2.getVolume(),
                    box_3.getVolume(),
                    box_4.getVolume(),
                    box_5.getVolume(),
                    box_6.getVolume(),
                    box_7.getVolume(),
                    box_8.getVolume()
                ],
                expected: [ 
                    box_3.name,
                    box_5.name

                ]
            },
        ];
        testCases.forEach(test => {
            it(
                `in : ${ test.in } \nexpected : ${ test.expected }`,
                ()=>{
                    const res = test.in;
                    expect(res) > 0 && expect(res) < 5;
                }
            );
        })
    }
)

describe(
    'Коробки среднего размера',
    () => {
        const testCases = [
            {
                in: [
                    box_1.getVolume(),
                    box_2.getVolume(),
                    box_3.getVolume(),
                    box_4.getVolume(),
                    box_5.getVolume(),
                    box_6.getVolume(),
                    box_7.getVolume(),
                    box_8.getVolume()
                ],
                expected: [ 
                    box_1.name,
                    box_4.name,
                    box_7.name

                ]
            },
        ];
        testCases.forEach(test => {
            it(
                `in : ${ test.in } \nexpected : ${ test.expected }`,
                ()=>{
                    const res = test.in;
                    expect(res) > 5 && expect(res) < 15;
                }
            );
        })
    }
)