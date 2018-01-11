// PROPS

class Propsexample extends Component{
	
	constructor(props){ // props is a parameter from parent components
	
		super(props);
		
		props.name = "21"; // ERROR : cause props is read-only
		
	}
	
}

// STATE

class Stateexample extends Component{
	
	constructor(props){
		
		super(props);
		
		// state is accessable in State example component
		
		this.state = { 
		
			name : "Dog",
			
			age : 3
			
		}
		
		// This's how 2ways-binding working, it different with Angular or Knockout
		
		this.update = function(name, e){
			
			this.setState({[name] : e.target.value}); // it editable
			
			// P/s :  You can use like that this.setState({ name : 'Cat'});
		}
		
	}
	
	render(){
		
		// this's JSX 
		
		return (
		
			<div>
				<input type="text" value={this.state.name} onChange={(e) => this.update('name',e)}
			</div>
		
		)
	}
}

// Functional Component

function autoCount(){
	const element = (
		<div>
			{Math.random(100)}
		</div>
	);
	ReactDOM.render(
         element,
         document.getElementById('autoReload') // Auto insert into dom node with #autoReload
    )
}

setInterval(autoCount,1000); // Call it every 1s

// Class Component

class Classsexample extends Component{
	
	constructor(props){
	
		super(props); // Have props
		
		this.state = {  // Also, have state
		
			name : "You name",
			
		}
		
	}
	
	render(){
		
		return (
		
			<div>
				{this.state.name}
			</div>
		
		)
	}
	
}

// Statefull Component & StatelessComponent
// it mean have this.state or not :)
