import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
  let sum = array.reduce(function (accumulator, current) {
        return accumulator + current;
    })
    return sum;
}

  


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    let mid = Math.floor(array.length / 2),
    nums = [...array].sort((a, b) => a - b);
    return array.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    let len = array.length;
    let mean = getSum(array) / len;
    let variance = variance(array,mean);
    let stdev = Math.sqrt(variance);
    let obj = {'length':len, 'sum': getSum(array), 'mean':mean,'median':getMedian(array),'min': Math.min(...array), 'max': Math.max(...array),'variance':variance,'standard deviation':stdev};
    return obj;
}

function variance(array, mean) {
    return array.map(function (sample) {
        return Math.pow(mean - sample, 2);
    })
        .reduce(function sum(m, v) {
            m += v;
            return m;
        }, 0) / array.length;
}

