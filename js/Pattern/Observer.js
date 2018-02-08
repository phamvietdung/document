'use strict';

// Observer Pattern 

class Observer{
	constructor(dom){	
		this.observers = [];
		this.DOM = dom;
		console.log('------------- Obj has create');
	}
	
	subscribe(fn){
		console.log('------------- Obj has subscribe!');
		this.observers.push(fn);
	}
	unsubscribe(fn){
		
		console.log('------------- Obj has unsubscribe!');
		
		this.observers = this.observers.filter(function(subscriber){
			return subscriber !== fn
		});
		
	}
	broadcast(dom){
		console.log('Obj has change to : ' + dom.value);
		this.observers.forEach((s) => s(this.DOM.value));	
	}

}

var obj = new Observer(document.getElementById('user'));

(obj.DOM).addEventListener('keyup', () => obj.broadcast((obj.DOM)));

const doubleResult = function(e){
	console.log('--> Subscribe value : ' + (e * 2));
}

function subscribe(){
	obj.subscribe(doubleResult);
}
function unsubscribe(){
	obj.unsubscribe(doubleResult);
}






