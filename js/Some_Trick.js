/* 
** Some trick with Javascript 
*/

/*
** If (nul, undefined, '', 0)
** Using !! => return false
*/

var num = 0 ;
!!num;// ==> false

var str; // its meaning undefined
!!str;// ==> false

var nul = null;
!!nul;// ==> false

var nulstr =''
!!nul;// ==> false

/*
** Always return number ( luôn trả về số )
*/

function toNumber(value){
	return +value;
}

var str = '123';

toNumber(str); // ==> 123

var str2 = 'a23';

toNumber(str2); // ==> NaN

// And using check 

!!toNumber(str) ? toNumber(str) : 'not a number'; // return 123

!!toNumber(str2) ? toNumber(str2) : 'not a number'; // return 'not a number'


/*
** Điều kiện rút gọn
*/ 

function isTrue(boolean){
	return boolean; // fake a result
}

function login(name){
	console.log(name + ' is login success!');
}

// instead of

if(isTrue(true)){
	login('dungpv');
}

// using

isTrue(true) && login('dungpv'); // dungpv is login success!

isTrue(false) && login('dungpv'); // false

/*
** Đặt giá trị mặc định
*/

// Default

function totalMoney(money){
	return money;
}

totalMoney(); // undefined

totalMoney(10000) // 10000

// ES5 and below

function totalMoney(money){
	return money || 0;	
}

totalMoney() // 0

totalMoney(10000) // 10000

// ES6

function totalMoney(money = 0){
	return money;
}

totalMoney(); // 0

totalMoney(10000) // 10000

/*
** Cache with loop
*/

// instead of

for (var i = 0; i < array.length; i++) {  // each loop
    console.log(array[i]);
}

// using

for (var i = 0, length = array.length; i < length; i++) {  // cache length 
    console.log(array[i]);
}

// Other

// Đôi khi thấy viết như dưới

!function(){}();

// về cơ bản nó giống với

// invoked function, tên đầy đủ là Immediately-invoked function expression , viết tắt IIFE

(function(){}());  // undefined

// thêm toán tử !, từ undefined => !undefined => true;

!function(){}(); // true

