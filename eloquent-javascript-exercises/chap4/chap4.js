//write program range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior.
function range(start, end, step = 1){
    let numbers = [];
    function addStep(start){
           if(start < end){
               return
           }
           numbers.push(start);
           return addStep(start + step)
}
addStep(start);
return numbers;
}
//write a sum function that takes an array of numbers and returns the sum of these numbers.
function sum (array){
    return array.reduce((total, num) => total + num);
    }
//Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.
function reverseArray(array){
    let newArray = [];
    while (array.length){
        newArray.push(array.pop());
    }
    return newArray;
}





function reverseArrayInPlace(arr){
    function reverseArray(index1, index2){
      if(index1 == index2){
         return arr;
        }
        let temp = arr[index1];
        arr[index1] = arr[index2]
        arr[index2]= temp;
        return reverseArray(index1 +1, index2 -1);
    }
    return reverseArray(0, arr.length -1);
    }
    //Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

//If you haven’t already, also write a recursive version of nth.
function arrayToList(array){
    let list = null;
    for (let i = array.length - 1; i >= 0; i--){
        list = {value: array[i],rest:list}
    }
 
     return list;
 }
 function listToArray(list){
     let array = [];
     for (let node = list; node; node = node.rest) {
         array.push(node.value);
     }
     return array;
 }
 function nth(list, n){
     let count = 0;
     for(let node = list; node; node = node.rest){
         if(count == n){
             return node.value;
         }
         count++;
 
     }
     return "Not Available";
 }