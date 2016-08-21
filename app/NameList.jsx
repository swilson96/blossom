import React from 'react';

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
        <form onSubmit={(e) => this.addNode(e)}>
          <input ref={(a) => this._inputElement = a} placeholder="new node"></input>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default NameList;
