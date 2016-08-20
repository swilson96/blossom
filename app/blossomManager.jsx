import React from 'react';

require("./css/blossomManager.scss");

class BlossomManager extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  resetBlossom(e) {
    this.setState({blossom: null});
    e.preventDefault();
  }

  saveBlossom(e) {
    // Generate a new key
    this.setState({blossom: "ABCDEFGHIJK"});
    e.preventDefault();
  }

  loadBlossom(e) {
    this.setState({blossom: this._blossomInput.value});
    this._blossomInput = "";
    e.preventDefault();
  }

  render() {
    var action;
    if (this.state.blossom) {
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
    if (this.state.blossom) {
      currentBlossom = <div className="currentBlossom">{this.state.blossom}</div>
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
