import React from 'react';
import BlossomStore from './blossomStore.js';

require("./css/blossomManager.scss");

class BlossomManager extends React.Component {
  constructor() {
    super();
    this.blossomStore = new BlossomStore();
    this.state = {};
  }

  resetBlossom(e) {
    this.setState({key: null});
    this.props.reset();
    e.preventDefault();
  }

  saveBlossom(e) {
    // Generate a new key
    var key = this.blossomStore.saveNewBlossom({nodes:{"ABC":"Simon"}});
    this.setState({key: key});
    e.preventDefault();
  }

  loadBlossom(e) {
    this.setState({key: this._blossomInput.value});
    this._blossomInput = "";
    e.preventDefault();
  }

  render() {
    var action;
    if (this.state.key) {
      action = (
        <form onSubmit={(e) => this.resetBlossom(e)}>
          <button type="submit">Reset page</button>
        </form>
      );
    } else {
      action = (
        <form onSubmit={(e) => this.saveBlossom(e)}>
          <button type="submit">Save as new blossom</button>
        </form>
      );
    }

    var currentBlossom = "";
    if (this.state.key) {
      currentBlossom = <div className="currentBlossom">{this.state.key}</div>
    }

    return (
      <div className="blossomManager">
        {currentBlossom}
        <div className="blossomAction">{action}</div>
        <div className="blossomLoad">
          <form onSubmit={(e) => this.loadBlossom(e)}>
            <input ref={(b) => this._blossomInput = b} placeholder="enter blossom key"></input>
            <button type="submit">Load</button>
          </form>
        </div>
      </div>
    );
  }
}

export default BlossomManager;
