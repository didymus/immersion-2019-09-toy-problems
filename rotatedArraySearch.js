var rotatedArraySearch = function(rotated, target) {
// create variables to act as starting points 
// approaching from the front
let minimumIndex = 0;
// approaching from the back
let maximumIndex = rotated.length - 1;
  // traversal `superstructure`
	while(minimumIndex <= maximumIndex){
  // create a medianIndex to traverse the array logarithmically
  let medianIndex = Math.floor((minimumIndex + maximumIndex) / 2);
  // check if target actually is at medianIndex
  if(target === rotated[medianIndex]){
    return medianIndex; // just return it
    // check if target is less than medianIndex
  } else if(target < rotated[medianIndex]){
    // reset maximumIndex to decrease closer to target
    maximumIndex = medianIndex - 1;
    // check if target is greater than medianIndex
  } else if(target > rotated[medianIndex]){
    // reset minimumIndex to increase closer to target
    minimumIndex = medianIndex + 1;
  }
}
  return -1; // if not found return -1
// ~90ms O(log n)
};