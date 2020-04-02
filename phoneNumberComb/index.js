var letterCombinations = function(digits, ) {
    let res =  []
    if (!digits.length){
        return []
    }
     const map = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz',
    };
    
    function go(i, s){
        if (s.length === digits.length){
            res.push(s)
            return
        }
        for (let c of map[digits[i]]){
            go(i + 1, s + c)
        }
        
    }
   
    
    go(0, '')
     return res
};