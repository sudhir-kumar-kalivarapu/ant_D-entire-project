import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
constructor(props){
	super(props)
	this.state ={
		userName :'Sudhir'
	};
   
};
 handleClick = () => {
     this.setState({userName:'Deadpool'});
 }
    

    render() {
        return(

            <div>
                <button onClick={this.handleClick}>update</button>
                <Child update = {this.state.userName}/>
                
            </div>
        );
        }
    }