// PARTIAL APPLICATION FUNCTION

var add = (x,y) => x + y;
// or

var add = (x,y) => {return x + y};

// the same with

function add(x,y){
	return x + y; 
}

var addTo2 = add.bind(null, 2);

var addTo3 = add.bind(null ,3);

console.log('Increment 2 to 2 : ', addTo2(2));

console.log('Increment 5 to 3 : ', addTo3(5));

// CURRRING

var add = x => y => x + y;

// or 

var add = x => y => {return x + y};

// the same with

function add(x){
	return function(y){
		return x + y;
	}
}

// add(2)(3) = 5