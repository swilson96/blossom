import React from 'react';
import { connect } from 'react-redux';
import { setKey } from '../actions';
import BlossomStore from './blossomStore';

require("./css/blossomManager.scss");

class BlossomManager extends React.Component {
  constructor() {
    super();
    this.blossomStore = new BlossomStore();
  }

  saveNewBlossom(e) {
    var key = this.blossomStore.saveNewBlossom(this.props.blossom);
    this.props.onSaveBlossom(key);
    e.preventDefault();
  }

  saveExistingBlossom(e) {
    // TODO!
    e.preventDefault();
  }

  loadBlossom(e) {
    this.setState({key: this._blossomInput.value});
    // TODO: load from firebase, and dispatch
    this._blossomInput = "";
    e.preventDefault();
  }

  render() {
    var action;
    if (this.props.keyValue) {
      action = (
        <form onSubmit={(e) => this.saveExistingBlossom(e)}>
          <button type="submit">Save this existing blossom</button>
        </form>
      );
    } else {
      action = (
        <form onSubmit={(e) => this.saveNewBlossom(e)}>
          <button type="submit">Save as new blossom</button>
        </form>
      );
    }

    var currentBlossom = "";
    if (this.props.keyValue) {
      currentBlossom = <div className="currentBlossom">{this.props.keyValue}</div>
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

const mapStateToProps = (state) => {
  return {
    blossom: {
      nodes: state.nodes,
      edges: []
    },
    keyValue: state.key
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSaveBlossom: (key) => {
      dispatch(setKey(key))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlossomManager);
