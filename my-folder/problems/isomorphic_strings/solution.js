/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const sArray = s.split("");
    const tArray = t.split("");
    const trackerObject = {}
    //map through both strings
    //Create an object using each letter from s as key and letter from t as the value. Before create a new key-value pair, always check if it's already exist.
    for (let i = 0; i < sArray.length; i++){
    //If doesn't, check if the new key will be assigned with an existing value
        if(!trackerObject[sArray[i]]){
            //if it will return value
            if(Object.values(trackerObject).includes(tArray[i])){
                return false
            }
            //If it won't, create new key-value pair
            else{
            trackerObject[sArray[i]] = tArray[i]
            }
        } 
    //If does, check if it matches with the key-value pair ==> return false if doesn't
    //else return true at the end of the loop
        else{
            if(trackerObject[sArray[i]] !== tArray[i]){
                return false
            }
        }
    }
    return true
};

