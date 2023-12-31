const diagSum = require('../modules/real-num-matrix');

const matrix_1 = [
    [3.3, 5.3, 2.8],
    [3.6, 6.8, 9.2],
    [5.3, 7.4, 5.3]
]

const res = diagSum(matrix_1)



describe(
    'Фильтруем массив',
    () => {
        const testCases = [
            {
                in: [
                    [3.3, 5.3, 2.8],
                    [3.6, 6.8, 9.2],
                    [5.3, 7.4, 5.3]
                ],
                expected: "Сумма диагоналей: 30.30 --- Элементы главной диагонали: 3.3,6.8,5.3"
            },
            {
                in: [
                    [1.5, 2.3, 5.1],
                    [3.6, 3.0, 9.2],
                    [2.4, 7.4, 0.1]
                ],
                expected: "Сумма диагоналей: 15.10 --- Элементы главной диагонали: 1.5,3,0.1"
            },
            {
                in: [
                    [1.1, 2.2, 3.3],
                    [4.4, 5.5, 6.6],
                    [7.7, 8.8, 9.9] 
                ],
                expected: "Сумма диагоналей: 33.00 --- Элементы главной диагонали: 1.1,5.5,9.9"
            },
            {
                in: [
                    [16.2,2.0,7.6],
                    [5.8,12.6,18.3],
                    [10.5,1.2,10.6]
                ],
                expected: "Сумма диагоналей: 70.10 --- Элементы главной диагонали: 16.2,12.6,10.6"
            },
        ];
        testCases.forEach(test =>{
            it(
                `in : ${ test.in } \nexpected : ${ test.expected }`,
                ()=>{
                    const res = diagSum(test.in);
                    expect(res).toEqual(test.expected);
                }
            );
        })
    }
)