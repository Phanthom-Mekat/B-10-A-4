function  waitingTime(waitingTimes  , serialNumber) {
    if (Array.isArray(waitingTimes)===false || typeof serialNumber !== 'number') {
        return 'Invalid Input';
    }
    let sum = 0;
    for (let i = 0; i < waitingTimes.length; i++) {
        sum += waitingTimes[i];
    }
    let average = Math.round(sum / waitingTimes.length);

    let peopleLeft = serialNumber - waitingTimes.length - 1;

    let waitingTime = peopleLeft * average;
    return waitingTime;


}

console.log(waitingTime("[6,2]", 9)); 
console.log(waitingTime([ 3, 5, 7, 11, 6 ], 10)); 
console.log(waitingTime([13, 2, 6, 7, 10], 6)); 
console.log(waitingTime([13, 2], 6)); 
console.log(waitingTime([6], 4)); 
console.log(waitingTime( 7 , 10)); 
console.log(waitingTime("[6,2]", 9)); 


// SAMPLE INPUT
// SAMPLE OUTPUT
// [ 3, 5, 7, 11, 6 ], 10
// 24
// [13, 2], 6
// 24
// [13, 2, 6, 7, 10], 6
// 0
// [6], 4
// 12
// 7 , 10
// Invalid Input
// "[6,2]", 9
// Invalid Input
// [7, 8, 3, 4, 5], "9"
// Invalid Input


