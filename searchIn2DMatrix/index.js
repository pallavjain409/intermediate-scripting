/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix.length){
        return false
    }
    let n = matrix[0].length
    let m  =  matrix.length
    let i = 0;
    let j = n - 1;
    while( i < m && j >=0){
        let curr = matrix[i][j];
        if(curr == target){
            return true;
        }
        else if (curr > target){
            j--
        }
        else {
            i++
        }
    }
    return false
};
