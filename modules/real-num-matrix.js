const matrix = [        // матрица
    [3.3, 5.3, 2.8],
    [3.6, 6.8, 9.2],
    [5.3, 7.4, 5.3],
]

let acum = 0      // Сумма элементов главной диагонали
let acum_2 = 0    // Сумма элементов побочной диагонали
const temp = []   // Массив элементов главной диагонали

console.log('Матрица:\n')
for(let i = 0; i < matrix.length; i++) { console.log(...matrix[i]) }  // Вывод матрицы на экран
    
for(let i = 0, j = 0; i < matrix.length; i++, j++) {    // Вычисление суммы главной и побочной диагонали
    const otherIndex = matrix.length - i - 1

    if (i == j){
        acum += matrix[i][j]
        temp.push(matrix[i][j])
    }

    i < 0 || otherIndex < 0 ? acum_2 += 0 : acum_2 += matrix[i][otherIndex]
}

let res = (acum + acum_2).toFixed(2)

console.log('\nСумма элементов главной и побочной диагонали: ', res)

console.log('\nЭлементы главной диагонали:', temp)