var combinationSum = function(candidates, target) {
    let result = [];
    if (!target || !candidates.length)return result;
    for (let candidate of candidates){
        dfs(candidates, 0, target, new Array,result)
        return result;
    }
    function dfs(candidates, start, target,list, result){
        if (target < 0) return;
        if (target === 0 ){
            result.push([...list]);
            return;
        }
        for (let i = start; i < candidates.length; i++){
            list.push(candidates[i]);
            dfs(candidates, i, target - candidates[i], list, result)
            list.pop();
        } 
    }
};
