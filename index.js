// code your solution here


const sadReality =  [ { result: "N/A" }, { result: "N/A" }, { result: "N/A" } ]
const record = [
  { year: "2018", result: "N/A"},
  { year: "2017", result: "N/A"},
  { year: "2016", result: "N/A"},
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
]
// function superbowlWin(arr){
//   return arr.find(item => {
//     if(item.result == "W"){  
//       // return yearWon["year"]
//     }
//     else if (item.result == "N/A"){
//       return undefined
//     }
//   })
// }


const superbowlWin = (arr) => {
  let yearWon = arr.find(item => item.result === "W")
  return (typeof yearWon === "object") ? yearWon["year"] : undefined
}