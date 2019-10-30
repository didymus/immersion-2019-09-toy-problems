// Merge two sorted arrays in sorted order
var merge = function (left, right) {
  // make variable to hold results
  let resultArray = [];
  // make variable for left index
  let leftIndex = 0;
  // make variable for right index
  let rightIndex = 0;
  // while left and right indexes are valid:
  while (leftIndex < left.length && rightIndex < right.length) {
    // if smaller push first
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // next index (left)
    } else {
      // otherwise push after
      resultArray.push(right[rightIndex]);
      rightIndex++; // next index (right)
    }
  }
  return resultArray // return results
    // need to concat to resultArray because left overs
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
};

var mergeSort = function (array) {
  // divide & conquer: divide problem into smaller problems to solve
  // divide: divide in half until we get a bunch of single element arrays
  // conquer: merge and sort the small arrays
  // base case: if array only has one element or is empty return it
  if (array.length <= 1) {
    return array;
  }
  // figure out middle to divide in half
  const median = Math.floor(array.length / 2);
  // divide into `left` and `right`
  const left = array.slice(0, median);
  const right = array.slice(median);
  // use recursion to combine left & right
  return merge(mergeSort(left), mergeSort(right));
};