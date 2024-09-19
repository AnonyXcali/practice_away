export function blackjackProbability(target: number, startingHand: number) {
  // Write your code here.
  let stop = (hand: number) => hand === target - 4 // dealer must stop here
  let burst = (hand: number) => hand > target //dealer burst
  let safe = (hand: number) => hand <= target //dealer can still draw
  let win = (hand: number) => hand === target //dealer won and stop



  return -1;
}
