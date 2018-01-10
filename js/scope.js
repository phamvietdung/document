
/*********************
****** HOISTING ******
*********************/

// 1, Example anonymous function , or self-invoking function

(function(){
	console.log(x); // ReferenceError: x is not defined
})();

// 2, It gonna be error, cause x is not defined in that scope
//    But what going on when you declare x after calling it

(function(){
	console.log(x); // undefined
	var x  = '123';
})();

// 2, x = undefined, mean x are declare, but didn't set any value. 
// It called HOISTING, or we can explain below

(function(){
	var x; // 
	console.log(x); // that why x = undefined here
	x = '123';
})();

