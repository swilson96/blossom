import React from 'react';
import { connect } from 'react-redux';
import { addNode } from '../actions';

require("./css/addNode.scss");

let AddNode = ({ dispatch }) => {
  let inputElement;

  let addNodeHandler = function(e) {
    e.preventDefault();
    dispatch(addNode(inputElement.value));
    inputElement.value = "";
  }

  return (
    <div className="addNodeMain">
      <form onSubmit={addNodeHandler}>
        <input id="addNodeInput" ref={a => inputElement = a} placeholder="new node"></input>
        <button id="addNodeSubmit" type="submit">Add</button>
      </form>
    </div>
  );
}

export default connect()(AddNode);
