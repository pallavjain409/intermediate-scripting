var generateParenthesis = function(n) {
  
    var res = []
    function gen(left, right, str){
        if (left == n && right == n){
            res.push(str)
            return
        }
        if (left < n){
            gen(left + 1, right, `${str}(`)
        }
        if (right < left && right < n){
            gen(left, right + 1, `${str})`)
        }
    }
    
    gen(0, 0, '')
    return res
};