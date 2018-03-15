'use strict';

/* 
** Singleton Pattern
** What different between Singleton and Module Pattern
** Singleton is a special case of Module, when have only one instance.
*/

// 1, Oldway

// UserStore instance one Invoked function.
// That why i called Singleton

var UserStore = (function(){
	
	var _data = [];
	
	function add(item){
		_data.push(item);
		console.log(' + push item with id : ' + item.id )
	}
	
	function get(id){
		return _data.find((d) => {
			return d.id === id;
		});
	}
	
	function pop(){
		_data.pop();
		console.log(' + remove item with id : ' + _data[_data.length - 1].id )
	}
	
	return {
		//data: _data,
		add : add,
		get : get,
		pop : pop,
	}
	
}());

UserStore.add({
	id : 1,
	name : "Car Toyota"
});

UserStore.add({
	id : 2,
	name : "Bike Yamaha"
});

UserStore.add({
	id : 3,
	name : "Magazines"
});

console.log(UserStore);

console.log(UserStore.get(3));


// 2,Newway


