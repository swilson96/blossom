import React from 'react';
import { connect } from 'react-redux';
import { addNode } from '../actions';

require("./css/addNode.scss");

class AddNode extends React.Component {
  constructor() {
    super();
    this.state = {message:'', className:''};
  }

  addNodeHandler(e) {
    e.preventDefault();

    if (!this.validate()) {
      return;
    }

    this.props.dispatch(addNode(undefined, this._inputElement.value));
    this._inputElement.value = "";
  }

  validate() {
    if (this._inputElement.value == '') {
      this.setState({className: 'invalid', message: 'A node needs a name'});
      return false;
    }
    this.setState({className: '', message: ''});
    return true;
  }

  render() {
    return (
      <div className="addNodeMain">
        <form onSubmit={(e) => this.addNodeHandler(e)}>
          <input id="addNodeInput" className={this.state.className} ref={(a) => this._inputElement = a} placeholder="new node"></input>
          <button id="addNodeSubmit" type="submit">Add</button>
          <span className="errorMessage">{this.state.message}</span>
        </form>
      </div>
    );
  }
}

export default connect()(AddNode);
