/* eslint-disable no-extend-native */
var bind = function(func, context) {
let prevArgs = Array.prototype.slice.call(arguments, 2);
return function(){
    let currentArgs = Array.prototype.slice.call(arguments);
    let combinedArgs = Array.prototype.concat(prevArgs, currentArgs);
    return func.apply(context, combinedArgs);
    };
};

Function.prototype.bind = function(context, ...bindArgs) {
return (...callArgs) => {
    const allArgs = bindArgs.concat(callArgs);
    return this.apply(context, allArgs);
};
};
