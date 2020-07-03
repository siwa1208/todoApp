import React from 'react';
import './App.css';
import TodoListItems from './TodoListItems';
import Header from './Header';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }

  /**
   * 
   *Add an item 
   */
  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key:''
      }
    })
    }
  }

  /**
   * 
   * Handler qui fait une màj du state au click du boutton 
   */
  handleInput = (e) =>{
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
/**
 * 
 * Delete items et màj du state au click du bouton
 *  
 */
  deleteItem = (key) => {
    const filteredItems = this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })
  }

  /**
   * 
   * @param {*} text 
   * @param {*} key 
   * 
   * MÀJ d'une item parcours le tableau d'items
   * Vérifie l'item à update via sa key 
   * MÀJ de l'item + son state via le onChange event
   * 
   */
  setUpdate = (text,key) => {
    const items = this.state.items;
    items.map(item=>{      
      if(item.key===key){
        console.log(item.key +"    "+key)
        item.text= text;
      }
    })
    this.setState({
      items: items
    })
  }

 render(){
  return (
    <div className="App">
        <Header numTodos={this.state.items.length} />

        <form onSubmit={this.addItem}>
          <div className="field">
            <div className="control">
            <input className="input is-success is-hovered is-rounded" type="text" placeholder="Enter task" value= {this.state.currentItem.text} onChange={this.handleInput}/>
            </div>
          </div>
          <button type="submit" className='button is-success is-hovered is-rounded'><span className="icon"><i className="fas fa-trash"></i></span></button>
        </form>

        <p>{this.state.items.text}</p>

        <TodoListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
    </div>
  );
 }
}


export default App;