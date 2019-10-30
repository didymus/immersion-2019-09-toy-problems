/* eslint-disable */ // try doing this with `flood fill` algo later
islandCounter = function (mapStr) {
    //console.log(mapStr);
    const mapArray = mapStr.split('\n'); // split at new line char
    //console.log(mapArray);
    let islands = 0; // island counter variable
    const splitMap = mapArray.map(value => value.split('')); // breakdown
    //console.log(splitMap);
    // `length`
    for (let i = 0; i < splitMap.length; i++) {
        // `width`
        for (let j = 0; j < splitMap[i].length; j++) {
            if (splitMap[i][j] === '0') { // if land ('0') then check the borders
                if (i === 0 && j === 0) {
                    if (splitMap[i][j + 1] === '.' && splitMap[i + 1][j] === '.') {
                        // check `length` borders, if '.' then...
                        islands++; // ...island found
                    }
                } else if ((j === 0 || splitMap[i][j - 1] === '.') && (i === 0 || splitMap[i - 1][j] === '.')) {
                    // check `width` borders, if '.' then...
                    islands++; // ...other island found
                }
            }
        }
    } return islands; // return island count
};