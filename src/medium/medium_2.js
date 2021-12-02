import mpg_data from "./data/mpg_data.js";
import {getStatistics} from "./medium_1.js";

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/


/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */
export const allCarStats = {
    avgMpg: {'city': cityMPG(), 'highway': highwayMPG()},
    allYearStats: getStatistics(getYears()),
    ratioHybrids: hybrid()
};

function cityMPG(){
    let arr =[];
    let sum = 0;
    for (let i in mpg_data){
        arr.push(mpg_data[i].city_mpg);
        sum = sum + mpg_data[i].city_mpg;
    }
    return sum / arr.length;
}
function highwayMPG(){
    let arr =[];
    let sum = 0;
    for (let i in mpg_data){
        arr.push(mpg_data[i].highway_mpg);
        sum = sum + mpg_data[i].highway_mpg;
    }
    return sum / arr.length;
}
function getYears(){
    let years =[];
    for (let i in mpg_data){
        years.push(mpg_data[i].year);
    }
    return years;
}
function hybrid(){
    let arr =[];
    let sum = 0;
    for (let i in mpg_data){
        arr.push(mpg_data[i].hybrid);
        sum = sum + mpg_data[i].hybrid;
    }
    return sum / arr.length;
}

/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */
export const moreStats = {
    makerHybrids: undefined,
    avgMpgByYearAndHybrid: 1
};

function avgMPG(year){
    let city_mpg_hy =[];
    let highway_mpg_hy =[];
    let city_mpg_not_hy =[];
    let highway_mpg_not_hy =[];
    let city_hy = 0;
    let highway_hy = 0;
    let city_not_hy = 0;
    let highway_not_hy = 0;
    for (let i in mpg_data){
        if (mpg_data[i].year == year){
        if (mpg_data[i].hybrid){
            city_mpg_hy.push(mpg_data[i].city_mpg);
            city_hy = city_hy + mpg_data[i].city_mpg;
            highway_mpg_hy.push(mpg_data[i].highway_mpg);
            highway_hy = highway_hy + mpg_data[i].highway_mpg;
        }
        else{
            city_mpg_not_hy.push(mpg_data[i].city_mpg);
            city_not_hy = city_not_hy + mpg_data[i].city_mpg;
            highway_mpg_not_hy.push(mpg_data[i].highway_mpg);
            highway_not_hy = highway_not_hy + mpg_data[i].highway_mpg;
        }
        }
    }
    city_hy = city_hy / city_mpg_hy.length;
    highway_hy = highway_hy / highway_mpg_hy.length;
    city_not_hy = city_not_hy / city_mpg_not_hy.length;
    highway_not_hy = highway_not_hy / highway_mpg_not_hy.length;

    let hybrid = {'city': city_hy, 'highway': highway_hy};
    let not_hybrid = {'city': city_not_hy, 'highway': highway_not_hy};
    let year_info = {year: (hybrid, not_hybrid)};
    return year_info;
}

function avgMpgByYearAndHybrid(){
    for (let i in getYears()){

    }
}


