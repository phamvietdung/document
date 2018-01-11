
/*********************
****** HOISTING ******
*********************/

// 1, Example anonymous function , or self-invoking function
//     + anonymous : without name
//     + self-invoking : started automatically

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


/*********************
*** GLOBAL SCOPE *****
*********************/

var x = 1;

console.log(x); // x = 1

function getValue(){
	
	alert(x); // Global , that why x = 1
	
}

/********************
*** LOCAL SCOPE *****
*********************/

var x = 'pikachu';

function updateForm(x){
	console.log(x);
}

console.log(updateForm('raichu'));


function nextForm(){
	var x = 'raichu';
	console.log(x);
}

// Using let (es6)


/********************
***** CLOSURE *******
*********************/

var name = 'Minh Béo';

function getGender(){
	var gender = 'gay lọ';
	console.log(name + ' chuẩn men')
}

getGender();

 
