var threeSum = function(arr){
    let result = [];
    arr = arr.sort((a, b) => a-b)
    for (let i = 0; i < arr.length - 3; i++){
        if(i == 0 || arr[i] > arr[i - 1]){ // [-4, -1, -1, 0 ,1, 2]
            let start = i + 1; // 1
            let end = arr.length - 1; // 5
            while(start < end){ // 3 // 5
                if (arr[i] + arr[start] + arr[end] === 0){
                   // -4 -1 -1 = -6
                    result.push([arr[i], arr[start], arr[end]])
                    start++ ;
                    end--
                }
                else if (arr[i] + arr[start] + arr[end] < 0){
                  
                   let current = arr[start]
                   while(current === arr[start] && start < end){
                       start++
                   }
                }
                 if (arr[i] + arr[start] + arr[end] > 0){
                    let current = arr[end]
                    while(current === arr[end] && start < end){
                        end--
                    }
                 }
            }
        }
    }
    return result
}

console.log(threeSum([0,0,0,]))