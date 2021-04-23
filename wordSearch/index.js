var exist = function(board, word) {
    let rowLength = board.length;
    let colLength = board[0].length;
    for (let row = 0; row < rowLength; row++){
        for (let col = 0; col < colLength; col++){
           if (dfs(board, row, col, 0)){
               return true
           }
        }
    }
    
    return false 
    function dfs(board , row, col, wordIndex){
        if (wordIndex  === word.length){
            return true
        }
        
        if (row < rowLength && row >= 0 && col >= 0 && col < colLength){
        let char = board[row][col]
        if (char !== word[wordIndex]){
           return false
        }
        board[row][col] = '-' 
        let result =  (dfs(board, row + 1, col, wordIndex + 1)
        || dfs(board, row -1 , col, wordIndex + 1)
        || dfs(board, row , col + 1, wordIndex + 1)
        || dfs(board, row , col - 1, wordIndex + 1)  )    
        board[row][col] = char
        return result
        }
    }
   
    return false
};