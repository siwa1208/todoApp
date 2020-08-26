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
        text:''
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
   *
  **/
  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:''
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
        text: e.target.value
      }
    })
  }
/**
 * 
 * Delete items et màj du state au click du bouton
 * pop - Removes from the End of an Array
 *  
 */
  deleteItem = () => {
    const newArr = [...this.state.items];
    newArr.pop();
    this.setState({items: newArr});
    //console.log(index, newArr);

  }

  /**
   * 
   * MÀJ d'une item parcours le tableau d'items
   * Vérifie l'item à update via son index
   * MÀJ de l'item + son state via le onChange event
   * 
   */
  setUpdate = (newText,index) => {
    let newIitems = this.state.items;
    newIitems[index].text = newText;

    this.setState({items: newIitems});
  }

 render(){

  return (
    <div className="App"  style={{display: "flex", flexDirection: "column", justifyContent : "center", marginLeft: 350, marginRight: 350}}>
        <Header numTodos={this.state.items.length} style={{marginLeft: 150, marginRight: 150}}/>

        <form onSubmit={this.addItem}>
          <div className="field"  style={{marginLeft: 150, marginRight: 150}}>
            <div className="control">
            <input style={{alignSelf: "center"}} className="input is-success is-hovered is-rounded" type="text" placeholder="Entrer une tâche" value= {this.state.currentItem.text} onChange={this.handleInput}/>
            </div>
          </div>
          <button type="submit" className='button is-success is-hovered is-rounded'>AJOUTER</button>
        </form>

        <TodoListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>

        <br></br>
    </div>
  );
 }
}
export default App;