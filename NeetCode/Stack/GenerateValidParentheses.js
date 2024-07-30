/**
 * Generate Parentheses
 * You are given an integer n. Return all well-formed parentheses strings that you 
 * can generate with n pairs of parentheses.
 */
class Solution {
  generateParentheses(n) {
    let result = [];
    
    function backtrack(current, open_count, close_count) {
      // Base case
      if (current.length === 2 * n) {
        result.push(current);
        return;
      }
      
      // Recursive case for adding an opening parenthesis
      if (open_count < n) {
        backtrack(current + '(', open_count + 1, close_count);
      }
      
      // Recursive case for adding a closing parenthesis
      if (close_count < open_count) {
        backtrack(current + ')', open_count, close_count + 1);
      }
    }
    
    // Initial call to the backtracking function
    backtrack('', 0, 0);
    
    return result;
  }
}

// Example usage
let sol = new Solution();
console.log(sol.generateParentheses(3));