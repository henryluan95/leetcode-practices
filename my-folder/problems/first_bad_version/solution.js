var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        start = 1;
        end = n;
        currentBadVersion = 0
        while(start<= end){
            mid = Math.floor((start + end) /2)
            if(isBadVersion(mid)){
                currentBadVersion = mid
                end = mid - 1
            }else{
                start = mid + 1
            }
        }
        return currentBadVersion
    };
};
