import React from 'react';
import Addtodo from './Addtodo';
class App extends React.Component{
	constructor(props){
		super(props);		
	}	
   
render(){
		return(
        <div>
            <Addtodo/>
        </div>
    );
}
}
export default App;
