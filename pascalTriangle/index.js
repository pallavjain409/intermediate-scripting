var generate = function(num){
    let result = []
    for(let i = 0; i < num; i++){
        result[i] = []
        for (let j = 0; j <= i; j++){
            if (j === 0 || j === i){
                result[i][j] = 1
            }
            else {
                result[i][j] = result[i - 1][j] + result[i - 1][j - 1]
            }
        }

    }
    return result
}
console.log(generate(30))