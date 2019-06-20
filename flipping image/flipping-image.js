var flipAndInvertImage = function(A) {
 return  A.map(arr => flipRow(arr)).map(arr => arr.map(input => invert(input)));
};
function flipRow(arr){
    let A = [];
    while(arr.length){
        A.push(arr.pop());
    }
    return A;
}
function invert(input){
    if(input == 0){
        return 1;
    }
    else{
        return 0;
    }
}
