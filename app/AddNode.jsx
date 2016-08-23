import React from 'react';
import { connect } from 'react-redux';
import { addNode } from '../actions';

require("./css/addNode.scss");

class AddNode extends React.Component {

  addNodeHandler(e) {
    e.preventDefault();
    dispatch(addNode(input.value));
    this._inputElement.value = "";
  }

  render() {
    return (
      <div className="addNodeMain">
        <form onSubmit={(e) => this.addNodeHandler(e)}>
          <input id="addNodeInput" ref={(a) => this._inputElement = a} placeholder="new node"></input>
          <button id="addNodeSubmit" type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default connect()(AddNode);
