// SCOPE
var name = "john doe", gender = '',saying = ''; // global scope;
function getGender(){
	var gender = "male"; // local scope
	console.log(name + ' is female'); //
}
gender || getGender(); // cause different scope, so gender is '' 

// CLOSURE

function getRealGender(){
	var gender = "male";
	var saying = " - He's saying : " + Math.random();
	return function realGender(){ // FUNCTION INNER FUNCTION , THIS'S LEXICAL FUNCTION
		console.log(name + ' is ' + gender);
		console.log(saying);
	}
}
var getGender = getRealGender(); // THIS IS WHY THEY CALLED STATIC SCOPE
gender || getGender();  // same value
gender || getGender();  // same value
gender || getGender();  // same value
