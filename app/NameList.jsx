import React from 'react';
import InputGrid from './inputGrid.jsx';

require("./css/nameList.scss");

class NameList extends React.Component {
  constructor() {
    super();
  }

  addNode(e) {
    e.preventDefault();
    this.props.addNode(this._inputElement.value)
    this._inputElement.value = "";
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
        <InputGrid nodes={this.props.blossom.nodes}/>
      </div>
    );
  }
}

export default NameList;
