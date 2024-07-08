 function countSheeps(list) {

    let sheepCount = 0;

    for (let i = 0; i < list.length; i++) {
        if (list[i] === true) {
            sheepCount++;
        }
    }
    
    if (sheepCount > 0) {
        return `The are ${sheepCount} sheep in total`;
    } else {
        return `UPS!!! Wolf eaten Sheeps`;
    }
}

console.log(countSheeps(true, true, true, false))  