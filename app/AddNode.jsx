import React from 'react';

require("./css/addNode.scss");

class AddNode extends React.Component {
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
      <div className="addNodeMain">
        <form onSubmit={(e) => this.addNode(e)}>
          <input id="addNodeInput" ref={(a) => this._inputElement = a} placeholder="new node"></input>
          <button id="addNodeSubmit" type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default AddNode;
