var topKFrequent = function(nums, k) {
    const map = new Map();
    
    for(let num of nums){
        if(!map.get(num)) map.set(num, 0)
        map.set(num, map.get(num) + 1)
    }
    
    const keyValuePairs = [...map.entries()]
    
    const sortedKeyPair = keyValuePairs.sort((a,b) => a[1] - b[1] )
    
    const requiredValue = sortedKeyPair.splice(-k)
    
    const output = []
    
    for (let item of requiredValue){
        output.push(item[0])
    }
    
    return output
};
