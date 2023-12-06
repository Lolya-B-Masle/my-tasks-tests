const matrix = [        // матрица
    [1.3, 5.3, 0.8],
    [3.6, 3.8, 9.2],
    [3.8, 7.4, 4.3]
]

console.log('Матрица:\n')
for(let i = 0; i < matrix.length; i++) { console.log(...matrix[i]) }  // Вывод матрицы на экран

const diagSum = (mat) => {          // Вычисление суммы главной и побочной диагонали
    let acum = 0      // Сумма элементов главной диагонали
    let acum_2 = 0    // Сумма элементов побочной диагонали
    const temp = []   // Массив элементов главной диагонали

    for(let i = 0, j = 0; i < mat.length; i++, j++) {    
        const otherIndex = mat.length - i - 1
    
        if (i == j){
            acum += mat[i][j]
            temp.push(mat[i][j])
        }   
    
        i < 0 || otherIndex < 0 ? acum_2 += 0 : acum_2 += mat[i][otherIndex]
    }
    
    return `Сумма диагоналей: ${(acum + acum_2).toFixed(2)} --- Элементы главной диагонали: ${temp}`
    //return {sum: (acum + acum_2).toFixed(2), mainElements: temp}
    
}
    
console.log(diagSum(matrix))


module.exports = diagSum