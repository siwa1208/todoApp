import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TodoListItems(props){
    const items = props.items;
    //const index = props.items.id;
    const listItems = items.map((item, index) =>
   {
       return <div className="list" key={index}>
     <p>
         <input className="input is-success is-rounded tile" type="text" id={item.key} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value, console.log(index))}}/>             
        <span>
       
        <FontAwesomeIcon className="faicons" onClick={() => {
            props.deleteItem(console.log(index))
        }} icon="trash"/>
        </span>
     </p>
    </div>})
    
    return <div className="content">        
        {listItems}        
        </div>;
  }

  export default TodoListItems;