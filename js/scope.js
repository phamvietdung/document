
/*********************
****** HOISTING ******
*********************/

(function(){
	console.log(x); // ReferenceError: x is not defined
})();

(function(){
	console.log(x); // undefined
	var x  = '123';
})();

// Cause in gonna be

(function(){
	var x; // 
	console.log(x);
	x = '123';
})();

