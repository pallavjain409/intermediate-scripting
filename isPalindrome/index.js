String.prototype.removeAllSpaces = function(){
     return this.replace(/\s/g,'');
   
}

var isPalindrome = function(s){
    let left = 0;
    let right = s.length -1;
    s = s.removeAllSpaces()
    while(left <= right){
        if(s[left] !== s[right]){
            return false
        }
        right--;
        left++
    }
    return true
}

console.log(isPalindrome("m a m"))