import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TodoListItems(props){
    const items = props.items;
    const listItems = items.map((item,index) =>
   {
       return <div className="list" key={index}>
     <div style={{marginLeft: 150, marginRight: 150, marginTop: "2%"}}>
         <input className="input is-success is-rounded" type="text" id={index} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value, index)}}/>             
        <span>
       
        <FontAwesomeIcon className="faicons" style={{ cursor:"pointer"}} onClick={() => {
            props.deleteItem(item.key)
        }} icon="trash"/>
        </span>
     </div>
    </div>})
    
    return <div className="content">        
        {listItems}        
        </div>;
  }

  export default TodoListItems;