var sumArray = function (array) {
    // store greatest sum
    let greatestFound = 0;
    // store greatest sum found so far
    let greatestSoFar = 0;
    // loop through input array
    for (let i = 0; i < array.length; i++) {
        // determine if current + value at [i]...
        //...is smaller or larger than single value at [i]
        if (greatestSoFar + array[i] < array[i]) {
            // if yes reassign greatestSoFar to value[i]
            greatestSoFar = array[i];
        } else {
            // if not add to greatestSoFar
            greatestSoFar += array[i];
        }

        if (greatestSoFar > greatestFound) {
            greatestFound = greatestSoFar;
        }
    }
    // deal with edge case
    if (greatestFound === 0) {
        greatestFound = Math.max(...array);
    }
    // return greatest sum
    return greatestFound;
};