const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppendT = perf.stop();  // Stops timer and save time results

perf.start();                     // Starts timer
doublerAppend(smallArray);
let resultsAppendS = perf.stop();  // Stops timer and save time results

perf.start();                     // Starts timer
doublerAppend(mediumArray);
let resultsAppendM = perf.stop();  // Stops timer and save time results

perf.start();                     // Starts timer
doublerAppend(largeArray);
let resultsAppendL = perf.stop();  // Stops timer and save time results

perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsertT = perf.stop();

perf.start();
doublerInsert(smallArray);
let resultsInsertS = perf.stop();

perf.start();
doublerInsert(mediumArray);
let resultsInsertM = perf.stop();

perf.start();
doublerInsert(largeArray);
let resultsInsertL = perf.stop();

perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


//console.log('Results for the extraLargeArray');
console.log("insert T", resultsInsertT.preciseWords);
console.log("insert S", resultsInsertS.preciseWords);
console.log("insert M", resultsInsertM.preciseWords);
console.log("insert L", resultsInsertL.preciseWords);
console.log("insert XL", resultsInsert.preciseWords);

console.log("append T", resultsAppendT.preciseWords);
console.log("append S", resultsAppendS.preciseWords);
console.log("append M", resultsAppendM.preciseWords);
console.log("append L", resultsAppendL.preciseWords);
console.log("append XL", resultsAppend.preciseWords);
