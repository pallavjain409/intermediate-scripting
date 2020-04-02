
var groupAnagrams = function(strs) {
    let map = {}
    
    for (let str of strs){
        let key = [...str].sort().join('')
        if (map[key]){
            map[key].push(str)
        }
        else {
            map[key] = [str]
        }
    }
    return Object.values(map)
};