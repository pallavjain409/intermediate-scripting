let Stack = require("../Stack.js")
var isValid = function(s) {
      var map = {
        '{':'}',
        '(':')',
        '[':']'
    }
let stack = new Stack();
    for (let i = 0 ; i < s.length; i++){
        if (s[i] == '[' || s[i] == '(' || s[i] == '{'){
            stack.push(s[i]);
        }
        else if (s[i] == ')' || s[i] == ']' || s[i] == '}'){
            if (s[i] == map[stack.peek()]){
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
