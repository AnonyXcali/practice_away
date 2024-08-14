/**
 * Q: Buy and Sell Crypto
 * 
 * You are given an integer array prices where prices[i] is the price of
 *  NeetCoin on the ith day.
 * 
 * You may choose a single day to buy one NeetCoin and choose a different day 
 * in the future to sell it.
 * 
 * Return the maximum profit you can achieve. You may choose to not 
 * make any transactions, in which case the profit would be 0.
 */


class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    let maximum = 0
    let buy = 0
    let sell = buy + 1
    
    while(sell < prices.length) {
      let profit = prices[sell] - prices[buy]

      if(profit <= 0) {
        buy += 1
        sell = buy + 1
      } else {
        maximum = Math.max(maximum, profit)
        sell += 1
      }
    }

    return maximum
  }

  maxProfit_nc(prices) {
    let maximum = 0
    let buy = 0
    let sell = buy + 1
    
    while(sell < prices.length) {
      if(prices[buy] < prices[sell]) {
        let profit = prices[sell] - prices[buy]
        maximum = Math.max(maximum, profit)
      } else {
        buy = sell
      }
      
      sell += 1
    }

    return maximum
  }
}

function main() {
  let test = [10,8,7,5,2]
  let market = [5, 1, 5, 6, 7, 1 ,10]
  let sol = new Solution()
  let ans = sol.maxProfit_nc(market)
  console.log(ans)
}

main()
