var nthFibonacci = function(n) {
// Fibonaci numbers start with 0 and 1
const result = [0, 1]; // index also 0 and 1
// start at index 2 and iterate until n
for(let i = 2; i <= n; i++){
    // each number is the sum of the two preceding
    result[i] = result[i - 1] + result[i - 2];
} return result[n]; // return index n
}; // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89...