import React from 'react';
import InputGrid from './inputGrid.jsx';

require("./css/nameList.scss");

class NameList extends React.Component {
  constructor() {
    super();
    this.state = {nodes:[]};
  }

  addNode(e) {
    var itemArray = this.state.nodes;

    itemArray.push(
      {
        name: this._inputElement.value,
        key: Date.now()
      }
    );

    this.setState({
      nodes: itemArray
    });

    this._inputElement.value = "";

    e.preventDefault();
  }

  render() {
    return (
      <div className="nameListMain">
        <div className="header">
          <form onSubmit={(e) => this.addNode(e)}>
            <input ref={(a) => this._inputElement = a} placeholder="new node"></input>
            <button type="submit">Add</button>
          </form>
        </div>
        <InputGrid nodes={this.state.nodes}/>
      </div>
    );
  }
}

export default NameList;
