/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   //Set the minimum price that we could buy to the first day
    let minimumPrice = prices[0]
   //Set the highestProfit to 0 initially
    let highestProfit = 0
   //Loop through the array of prices
    for(i=1;i<prices.length;i++){
   //Compare the new price with our minumim price for the difference
   //If the difference is higher than highest profit. reassign the highest profit
      if(prices[i] - minimumPrice > highestProfit){
        highestProfit = prices[i] - minimumPrice
      }
   //If the next price is lower than our minimum price, reassign it
      if(prices[i] < minimumPrice){
        minimumPrice = prices[i]
      }
    }
  
  return highestProfit
};
