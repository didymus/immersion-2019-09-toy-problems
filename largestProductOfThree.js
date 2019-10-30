var largestProductOfThree = function(array) {
// sort array
array.sort((a, b) => a - b);
//console.log(array);
const product1 = (array[array.length - 3] * array[array.length - 2] * array[array.length - 1]);
// `product2` is to handle negative numbers
const product2 = (array[0] * array[1] * array[array.length - 1]);
// will return the max product
return Math.max(product1, product2);
};