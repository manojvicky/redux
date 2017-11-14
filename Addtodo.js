import React from 'react';
import {connect} from 'react-redux';
import * as actions from './actionCreators';

class Addtodo extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ''};
        this.AddTodoSave = this.AddTodoSave.bind(this);
        this.AddTodoValue = this.AddTodoValue.bind(this);
        
    }

    AddTodoValue(event){
        this.setState({value: event.target.value});
    }

    AddTodoSave(event){
        
        event.preventDefault();
        if (!this.state.value.trim()) {
            return
          }
        this.props.dispatch(actions.addTodo(this.state.value));
        this.setState({value: ''});
        
    }

    
ViewTodo(Addtodo,index){
    const handleClick = (index) =>{if(index===undefined){return}console.log(index);}
return <div className={Addtodo.id} key={Addtodo.id}>{Addtodo.id}<br/>{Addtodo.text}</div>;
}

    render(){
        return(
            <div>
            <form onSubmit={this.AddTodoSave}>
                <input type='text' value={this.state.value} onChange={this.AddTodoValue} />
                <input type="submit" value="Add Todo" />
                <div>Courses: {this.props.Addtodo.map(this.ViewTodo)}</div>
            </form>
            </div>
        );
    }
}

function mapStateToProps(state){
	return{
Addtodo: state.todos
}
}

export default connect (mapStateToProps)(Addtodo);