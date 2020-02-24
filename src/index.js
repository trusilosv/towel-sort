module.exports = function towelSort(matrix) {
    if (arguments.length === 0)
        return [];
    let temp = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 == 0) {
            for (let j = 0; j < matrix[i].length; j++) {
                temp.push(matrix[i][j]);
            }
        } else {
            for (let j = matrix[i].length - 1; j >= 0; j--) {
                temp.push(matrix[i][j]);
            }

        }

    }
    return temp;
}