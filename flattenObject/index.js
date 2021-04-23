function flattenObject(dict, result = {}, prefix = ""){
    for(let key in dict){
        if (typeof dict[key] !== "object"){
           result[!prefix ? key : prefix + '.' + key ] = dict[key]
        }
        else{
            
            flattenObject(dict[key], result,  !prefix  ? key  : prefix + '.'  + key)
        }
    }
    return result
}

dict = {
            "Key1" : "1",
            "Key2" : {
                "a" : "2",
                "b" : "3",
                "c" : {
                    "d" : "3",
                    "e" : {
                        "" : "1"
                    }
                },
                "r": {"f": '1'}
            }
        }

        console.log(flattenObject(dict))