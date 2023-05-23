// mean: average of all the numbers.
// mode: most occurring number.
// median: middle number when all the numbers are sorted in ascending order.

const grades = [2, 4, 6, 6, 8, 8, 8, 10];
//function to calculate mean
function calculateMean(grades) {
    const sum = grades.reduce((acc, num) => acc + num, 0);
    return sum / grades.length;
  }

//function to calculate mode
  function calculateMode(grades) {
    const frequency = {};
    let maxFreq = 0;
    let mode = [];
    for (let num of grades) {
      frequency[num] = (frequency[num] || 0) + 1;
      if (frequency[num] > maxFreq) {
        maxFreq = frequency[num];
        mode = [num];
      } else if (frequency[num] === maxFreq) {
        mode.push(num);
      }
    }
    return mode;
  }  

//function to calculate median
function calculateMedian(grades) {
    const sorted = grades.sort((a, b) => a - b);
    //math.floor() is used to round down and return the largest interger less than or equal to a given number.
    const middleNumber = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
      return (sorted[middleNumber - 1] + sorted[middleNumber]) / 2;
    } else {
      return sorted[middleNumber];
    }
  }


function calculateStats(grades, stat) {
    let result;
    switch (stat) {
      case "mode":
        result = calculateMode(grades);
        break;
      case "median":
        result = calculateMedian(grades);
        break;
      case "mean":
        result = calculateMean(grades);
        break;
      default:
        result = "Invalid stat type";
    }
    return result;
  }

const mode = calculateStats(grades, "mode"); // returns [8]
const median = calculateStats(grades, "median"); // returns 7
const mean = calculateStats(grades, "mean"); // returns 6.75

console.log(calculateStats(grades, "mode"))
console.log(calculateStats(grades, "median"))
console.log(calculateStats(grades, "mean"))


// @Steve and @David : I got stuck along the line and borrowed some lines of code. especially with the median function.
  

  

  