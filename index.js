// code your solution here
const superbowlWin = (arr) => {
  let yearWon = arr.find(item => item.result === "W")
  return (typeof yearWon === "object") ? yearWon["year"] : undefined
}