let Stack = require("../Stack.js")
var isValid = function(s) {
      var brackets = {
        '{':'}',
        '(':')',
        '[':']'
    }
let stack = new Stack();
    for (let i = 0 ; i < s.length; i++){
        if (Object.keys(brackets).includes(s[i])){
            stack.push(s[i]);
        }
        else if (Object.values(brackets).includes(s[i])){
            if (s[i] == brackets[stack.peek]){
                stack.pop();
            }
            else {
                return false;
            }
        }
    }
   return stack.isEmpty();
};
 module.exports = isValid;
