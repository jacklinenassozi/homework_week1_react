import React,{Component} from 'react';

export class ToDoList extends Component{
    
    render(){
        console.log(this.props)
        return (
            <div>
            <ul>
            {this.props.items.map(item =>{
               return <li className='listing'>{item} </li>
            })}
   
            </ul>
            </div>
        )
    }
}

